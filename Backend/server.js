import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import dns from "dns";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOriginsEnv = process.env.CORS_ORIGIN;
const allowedOrigins = allowedOriginsEnv
  ?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean) ?? [];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.length === 0) {
        callback(new Error("Not allowed by CORS"));
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/reservation", reservationRoutes);

app.get("/", (req, res) => {
  res.status(200).send("API is running...");
});

const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);

if (!mongoUrl) {
  throw new Error("MONGO_URL is not set in environment variables");
}

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

dns.setServers(["8.8.8.8", "1.1.1.1"]);
mongoose
  .connect(mongoUrl, { family: 4 })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
