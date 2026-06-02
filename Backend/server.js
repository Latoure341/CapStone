const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// CORS
const allowedOriginsEnv = process.env.CORS_ORIGIN || '';
const allowedOrigins = allowedOriginsEnv
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Health route
app.get('/', (req, res) => {
  res.status(200).send('API is running...');
});

// Database connection
const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl)

if (!mongoUrl) {
  throw new Error('MONGO_URL is not set in environment variables');
}

// Handle unmatched routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

mongoose.connect(mongoUrl, {family: 4})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

