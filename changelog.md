# Changelog

<!-- ## v0.3.0 ...
**Release Date**: ...

- summary point goes here

--- -->

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
