# Changelog

<!-- ## v0.8.0 ...
**Release Date**: ...

- summary point goes here

--- -->

## v0.7.0 – Frontend Setup with React
**Release Date**: December 8, 2025

- Initialized the frontend using **Vite with React + JavaScript**
- Removed boilerplate files and prepared a clean project structure
- Installed and configured Tailwind CSS v3 and daisyUI v4
- Added core frontend libraries (React Router, Axios, Zustand, react-hot-toast, lucide-react)
- Implemented initial folder structure for components and pages
- Created `HomePage`, `ProductPage`, and `Navbar` components
- Set up React Router and global layout with persistent Navbar
- Wrapped the app with `BrowserRouter` in `main.jsx` to enable routing

---

## v0.6.0 Add Rate Limiting, Bot Detection, and Arcjet Middleware
**Release Date**: December 7, 2025

- Implemented full Arcjet configuration using `tokenBucket`, `shield`, and `detectBot` protections.
- Created `backend/lib/arcjet.js` with reusable Arcjet client and middleware rules.
- Added environment variables (`ARCJET_ENV`, `ARCJET_KEY`) and documented their roles.
- Connected Arcjet to `server.js` using middleware to enforce rate limiting and bot detection.
- Added request-level token consumption (`requested: 1`) inside the middleware.
- Added logic to respond to `429 Too Many Requests`, suspicious bots, and spoofed bots.
- Documented how the token bucket algorithm works and why it protects against abusive traffic.
- Improved backend security by blocking malicious traffic and enforcing stable request flow.

---

## v0.5.0 Testing All Product Endpoints with Postman
**Release Date**: December 7, 2025

- Fixed SQL queries for creating and updating products that previously caused POST and PUT requests to fail.
- Successfully tested all CRUD endpoints (GET all, GET one, POST, PUT, DELETE) using Postman.
- Created a Postman collection with organized requests for each product endpoint.
- Verified JSON success responses and database updates via the Neon dashboard.
- Confirmed descending ordering of products using the controller's SQL query.
- Ensured each controller method returns clear response data for debugging and frontend integration readiness.
- Validated that the backend is stable and prepared for implementing rate limiting and bot detection.

---

## v0.4.0 Updated Routes and Controllers Setup with Test Endpoints
**Release Date**: December 6, 2025

- Expanded `productRoutes.js` to include all product-related endpoints for testing (`GET`, `POST`, `PUT`, `DELETE`).
- Updated `productController.js` to query the PostgreSQL database using the Neon SQL client.
- Implemented `getAllProducts` controller to fetch products directly from the database.
- Replaced hardcoded placeholder data with live DB-driven results.
- Ensured error handling returns consistent JSON responses for failed queries.
- Confirmed `/api/products` successfully returns data from the Postgres `products` table.

---

## v0.3.0 PostgreSQL Database Setup with Neon & Environment Variables
**Release Date**: December 5, 2025

- Set up a Neon-hosted PostgreSQL database for the backend.
- Added all required Postgres credentials to `.env` and removed unused `ENDPOINT_ID`.
- Organized and documented environment variables for Postgres + Arcjet.
- Integrated Arcjet SDK and added development-only configuration environment variable.
- Created `config/db.js` with a reusable SQL client using `@neondatabase/serverless`.
- Implemented `initDB()` to initialize the database and create the `products` table if missing.
- Updated `server.js` to run the DB initialization *before* starting the server.
- Verified successful table creation via the Neon dashboard.

---

## v0.2.0 Organizing the Backend Project Structure
**Release Date**: December 4, 2025

- Created `routes/` and `controllers/` directories to modularize backend logic.
- Moved all product-related endpoints into `productRoutes.js`.
- Added controller functions in `productController.js` to prepare for future business logic.
- Integrated the product routes into `server.js` using a clean `/api/products` base path.
- Improved readability of server setup and updated project structure for scalability.
- Added a fallback port if the `.env` configuration is unavailable.
- Cleaned and organized comments in `server.js`.

---

## v0.1.0 Backend Setup for PERN Application
**Release Date**: December 4, 2025

- Initialized root project structure for a full-stack PERN application.
- Installed core backend dependencies (Express, CORS, Helmet, Morgan, Dotenv, Neon, Arcjet).
- Configured `package.json` with ES Modules, main entry point, and `npm run dev` using Nodemon.
- Created `.env` file for environment variables and connected it to the server.
- Built and tested `backend/server.js` with middleware, JSON parsing, security headers, request logging, and a working test route.
- Verified the server runs from the project root via `npm run dev`.

---

<section align="center">
  <code>coderBri © 2025</code>
</section>
