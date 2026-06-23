import mongoose from "mongoose";

const reservationModelSchema = new mongoose.Schema({
  booker: { type: String, required: true },
  propertyName: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Reservations", reservationModelSchema);