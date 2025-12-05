import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config()

/* --- Postgres Database Setup --- */
// ? Creates SQL Connection using ENV variables
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

// ? This SQL function exported is used as a tagged template
//   literal, which allows us to write SQL queries safely.
