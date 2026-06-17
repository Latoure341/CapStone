const { postReservation, reservedPlace, removeReservation } = require('../controllers/reservationController.js');
const express = require('express');
const router = express.Router();

router.post("/reserve", postReservation);
router.get("/reservedPlace", reservedPlace)
router.delete("/delete", removeReservation)

module.exports = router;