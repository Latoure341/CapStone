import mongoose from "mongoose";

const listingPlacesSchema = new mongoose.Schema({
  // Define your schema fields here
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  amenities: { type: [String], required: true },
  additionalInfo: { type: String },
});

export default mongoose.model("ListingPlace", listingPlacesSchema);
