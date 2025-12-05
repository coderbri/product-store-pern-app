import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

/* --- Constants ---- */
const app = express();
const PORT = process.env.PORT || 3000;

/* --- Middleware --- */
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/* ---- Routes ----- */
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(` > Server is up and running on PORT: ${PORT}.`);
});
