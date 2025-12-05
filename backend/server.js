import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";

dotenv.config();

/* --------- Constants ---------- */
const app = express();
const PORT = process.env.PORT || 3000;

/* --------- Middleware --------- */
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/* ---------- Routes ------------ */
app.use("/api/products", productRoutes);

/* --- Database Initialization ---*/
async function initDB() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        
        console.log(" > Database initialized successfully!");
    } catch (error) {
        console.log(" > Error initDB", error);
    }
}

// ? Run callback function to listen to app after the database is instantiated
initDB().then(() => {
    app.listen(PORT, () => {
        console.log(` > Server is up and running on PORT: ${PORT}.`);
    });
});
