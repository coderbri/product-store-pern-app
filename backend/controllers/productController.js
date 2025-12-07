import { sql } from "../config/db.js";

/* ---- GET All Products ---- */
export const getAllProducts = async (req, res) => {
    try {
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;
        
        console.log("Fetched products successfully!", products);
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log(" > (!) ERROR in `getProducts` function:", error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
};

/* --- CREATE One Product --- */
export const createProduct = async (req, res) => {
    const { name, price, image } = req.body;
    
    if (!name || !price || !image) {
        return res.status(400).json({ success: false, message: "All fields are required." })
    }
    
    try {
        const newProduct = await sql`
            INSERT INTO products (name, price, image)
            VALUES (${name},${price},${image})
            RETURN *
        `;
        
        console.log(" > Product created successfully!", newProduct);
        res.status(201).json({ success: true, data: newProduct[0] });
    } catch (error) {
        console.log(" > (!) ERROR in `createProduct` function:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

/* ---- GET One Product ----- */
export const getProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
        const product = await sql`
            SELECT * FROM products WHERE id=${id}
        `;
        
        console.log(" > Product fetched successfully!", product[0] );
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        console.log(" > (!) ERROR in `getProduct` function:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

/* --- UPDATE One Product --- */
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;
    
    try {
        const updatedProduct = await sql`
            UPDATE products
            SET name=${name}, price=${price}, image=${image}
            WHERE id=${id}
            RETURNING *
        `;
        if (updateProduct.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        
        console.log(" > Product updated successfully!", updatedProduct[0] );
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.log(" > (!) ERROR in `updateProduct` function:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

/* --- DELETE One Product --- */
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await sql`
            DELETE FROM products WHERE id=${id} RETURNING *
        `;
        
        if (deletedProduct.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        
        console.log(" > Product deleted successfully!");
        res.status(200).json({ success: true, data: deletedProduct[0] });
    } catch (error) {
        console.log(" > (!) ERROR in `deleteProduct` function:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
