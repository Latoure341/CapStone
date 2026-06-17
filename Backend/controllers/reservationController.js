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

// Get the reserved places
export const reservedPlace = async (req, res) => {

    const reservedPlace = await Reservations.find()
    if(!reservedPlace){
        return res.status(500).json({message: "Failed to fetch reserved place or there is no reservations", error: error.message});
    }

    return res.status(200).json({message: "Successful retrieval of the reserved place", "reservedPlace" : reservedPlace})
}

// Delete the reserved place
export const removeReservation = async (req, res) => {
  try {
    const { property } = req.body;

    if (!property) {
      return res.status(400).json({ error: "Property name is required" });
    }

    const deletedReservation = await Reservations.findOneAndDelete({ propertyName: property });

    if (!deletedReservation) {
      return res.status(404).json({ error: "Listing not found" });
    }

    res.status(200).json({
      message: "Property reservation deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete listing", details: error.message });
  }
};