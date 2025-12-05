import express from "express";
import {
    getAllProducts,
    createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);    // GET All Products
router.post("/", createProduct);    // CREATE One Product


export default router;
