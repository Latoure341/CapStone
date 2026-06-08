const mongoose = require("mongoose");

const listingModelSchema = new mongoose.Schema({
  listName: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  rooms: { type: Number, required: true },
  baths: { type: Number, required: true },
  guests: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  price: { type: Number, required: true },
  amenities: { type: [String], default: [] },
  theType: { type: String, default: "Entire Home" },
  images: [{
    filename: { type: String },
    data: { type: String, required: true }, // Base64 encoded image data
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Listing", listingModelSchema);
