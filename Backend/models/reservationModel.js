const mongoose = require("mongoose");

const reservationModelSchema = new mongoose.Schema({

    booker: { type: String, required: true },
    property: { type: String, required: true },
    checkIn: {type: Date, required: true},
    checkout: {type: Date, required: true},
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Reservations", reservationModelSchema);