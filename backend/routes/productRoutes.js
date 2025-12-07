import express from "express";
import {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);        // GET All Products
router.get("/:id", getProduct);         // GET One Product
router.post("/", createProduct);        // CREATE One Product
router.put("/:id", updateProduct);      // UPDATE One Product
router.delete("/:id", deleteProduct);   // DELETE One Product

export default router;
