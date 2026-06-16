const { postReservation } = require('../controllers/reservationController.js');
const express = require('express');
const router = express.Router();

router.post("/reserve", postReservation);

module.exports = router;