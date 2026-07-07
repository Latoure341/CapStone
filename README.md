# Capstone Project

## Overview

This repository contains a full-stack property booking application built with a React + Vite frontend and an Express + MongoDB backend. The platform supports user authentication, property listing browsing, listing creation, reservations, and an admin experience for managing content.

## Features

- User registration and login
- Browse available listings and preview property details
- Create and manage listings
- Reserve properties through the application
- Admin dashboard for listing and reservation management
- Responsive UI built with styled-components

## Project Structure

- Backend/
  - Express server and REST API routes
  - MongoDB connection with Mongoose
  - Authentication and protected routes
  - Listing and reservation controllers
- Frontend/
  - React application with Vite
  - Routing for home, listing, login, signup, preview, and admin pages
  - Reusable components and styled UI

## Tech Stack

### Backend
- Node.js
- Express
- MongoDB / Mongoose
- JWT for authentication
- bcrypt for password hashing
- cors and dotenv
- multer for image uploads
- nodemon for development

### Frontend
- React
- Vite
- React Router DOM
- Axios
- styled-components
- react-icons

## Prerequisites

- Node.js installed
- MongoDB instance running or a MongoDB Atlas connection string

## Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with the following values:
   ```env
   PORT=5000
   MONGO_URL=<your-mongodb-connection-string>
   CORS_ORIGIN=http://localhost:5173
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

## Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Running the Application

1. Start the backend server first.
2. Start the frontend development server.
3. Open the frontend URL in your browser, typically:
   ```text
   http://localhost:5173
   ```

## API Overview

The backend exposes routes for:

- User authentication:
  - POST /api/user/register
  - POST /api/user/login
  - GET /api/user/me
- Listings:
  - GET /api/listings
  - POST /api/listings
  - GET /api/listings/:id
  - PUT /api/listings/:id
  - DELETE /api/listings/delete
- Reservations:
  - POST /api/reservation/reserve
  - GET /api/reservation/reservedPlace
  - DELETE /api/reservation/delete

## Notes

- The frontend is expected to run on port 5173 by default.
- The backend uses port 5000 unless changed in the environment variables.
- Make sure the backend CORS origin matches the frontend URL to avoid request failures.

## License

This project is intended for educational and capstone demonstration purposes.
