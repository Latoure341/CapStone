# Capstone Project

## Overview

This repository is a full-stack Capstone project with a React + Vite frontend and an Express + MongoDB backend. It implements user authentication flows including registration and login.

## Project Structure

- `Backend/`
  - Express server with REST API routes
  - MongoDB connection via Mongoose
  - User authentication with hashed passwords using bcrypt
  - CORS configured for the frontend origin
- `Frontend/`
  - React application built with Vite
  - Login and registration UI
  - Axios calls to backend endpoints
  - Styled-components for component styling

## Backend

### Tech stack

- Node.js
- Express
- MongoDB / Mongoose
- bcrypt
- cors
- dotenv
- nodemon

### Setup

1. Open a terminal and navigate to `Backend/`:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following environment variables:
   ```env
   PORT=5000
   MONGO_URL=<your-mongodb-connection-string>
   CORS_ORIGIN=http://localhost:5173
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### API Endpoints

- `POST /api/user/register`
  - Request body: `{ email, password, confirmPassword }`
  - Registers a new user
- `POST /api/user/login`
  - Request body: `{ email, password }`
  - Logs in an existing user

## Frontend

### Tech stack

- React
- Vite
- Axios
- React Router DOM
- styled-components
- react-icons

### Setup

1. Open a separate terminal and navigate to `Frontend/`:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend dev server:
   ```bash
   npm run dev
   ```

### Notes

- The frontend is expected to run at `http://localhost:5173` by default.
- The backend listens on port `5000` unless overridden by `PORT` in `.env`.
- Ensure `CORS_ORIGIN` in the backend `.env` file matches the frontend origin so requests are accepted.

## How to Use

1. Start the backend server first.
2. Start the frontend application.
3. Open the frontend URL in your browser and use the login/register screens.

## Troubleshooting

- If the frontend cannot connect to the backend, verify:
  - Backend is running on `http://localhost:5000`
  - `CORS_ORIGIN` is set to `http://localhost:5173`
  - MongoDB connection string is valid

## License

This project is provided for Capstone demonstration purposes.
