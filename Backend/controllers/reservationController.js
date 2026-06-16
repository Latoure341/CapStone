import mongoose from "mongoose";
import Reservations from "../models/reservationModel.js";

export const postReservation = async (req, res) => {
    try {
        const reservationDetails = req.body;
        if (!reservationDetails) {
            return res.status(400).json({ message: "Reservation details are required" });
        }

        const { BookedBy, property, checkedIn, checkedOut } = reservationDetails;
        if (!BookedBy || !property || !checkedIn || !checkedOut) {
            return res.status(400).json({ message: "All reservation fields are required" });
        }

        const newReservation = new Reservations({
            booker: BookedBy,
            propertyName: property,
            checkIn: checkedIn,
            checkOut: checkedOut,
        });
        await newReservation.save();

        return res.status(200).json({ message: "Successfully reserved the place" });
    } catch (error) {
        console.error("Reservation save error:", error);
        return res.status(500).json({ message: "Failed to save reservation", error: error.message });
    }
};