import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();

/* ------------- Constants -------------- */
const app = express();
const PORT = process.env.PORT || 3000;

/* ------------- Middleware ------------- */
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/* --- Bot Detection & Rate Limiting  --- */
app.use(async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {
            requested: 1 // specifies that each request consumes 1 token
        })
        
        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                res.status(429).json({ error: "Too Many Requests" });
            } else if (decision.reason.isBot()) {
                res.status(403).json({ error: "Bot access denied" });
            } else {
                res.status(403).json({ error: "Forbidden" });
            }
            return;
        }
        
        // ? Check for spoofed bots
        if (decision.results.some( (result) => result.reason.isBot() && result.reason.isSpoofed() )) {
            res.status(403).json({ error: "Spoofed bot detected" });
            return;
        }
        
        next();
    } catch (error) {
        console.log("Arcjet Erorr", error);
        next(error);
    }
});

/* -------------- Routes ---------------- */
app.use("/api/products", productRoutes);

/* ------ Database Initialization ------- */
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
