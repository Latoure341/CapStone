const Listing = require("../models/listingModel");

// Create a new listing
const createListing = async (req, res) => {
  try {
    const { listName, location, description, rooms, baths, guests, price, amenities, theType, rating } = req.body;

    // Validate required fields
    if (!listName || !location || !description || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No images uploaded" });
    }

    // Convert uploaded files to base64
    const images = req.files.map(file => ({
      filename: file.originalname,
      data: file.buffer.toString("base64"),
    }));

    // Parse amenities if it's a string (comes as JSON string from FormData)
    let parsedAmenities = [];
    if (amenities) {
      try {
        parsedAmenities = typeof amenities === "string" ? JSON.parse(amenities) : amenities;
      } catch (e) {
        parsedAmenities = [];
      }
    }

    // Create new listing
    const newListing = new Listing({
      listName,
      location,
      description,
      rooms: rooms || 0,
      baths: baths || 0,
      guests: guests || 0,
      price,
      amenities: parsedAmenities,
      theType: theType || "Entire Home",
      rating: rating || 0,
      images,
    });

    // Save to database
    const savedListing = await newListing.save();

    res.status(201).json({
      message: "Listing created successfully",
      listing: savedListing,
    });
  } catch (error) {
    console.error("Error creating listing:", error);
    res.status(500).json({ error: "Failed to create listing", details: error.message });
  }
};

// Get all listings
const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(
      listings
    );
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ error: "Failed to fetch listings", details: error.message });
  }
};

// Get a specific listing by ID
const getListingById = async (req, res) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    res.status(200).json({
      message: "Listing retrieved successfully",
      listing,
    });
  } catch (error) {
    console.error("Error fetching listing:", error);
    res.status(500).json({ error: "Failed to fetch listing", details: error.message });
  }
};

// Update a listing
const updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    const { listName, location, description, rooms, baths, guests, price, amenities, theType, rating } = req.body;

    // Find listing
    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    // Handle new images if uploaded
    let images = listing.images;
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => ({
        filename: file.originalname,
        data: file.buffer.toString("base64"),
      }));
    }

    // Parse amenities if it's a string
    let parsedAmenities = amenities;
    if (amenities && typeof amenities === "string") {
      try {
        parsedAmenities = JSON.parse(amenities);
      } catch (e) {
        parsedAmenities = amenities;
      }
    }

    // Update listing
    const updatedListing = await Listing.findByIdAndUpdate(
      id,
      {
        listName: listName || listing.listName,
        location: location || listing.location,
        description: description || listing.description,
        rooms: rooms !== undefined ? rooms : listing.rooms,
        baths: baths !== undefined ? baths : listing.baths,
        guests: guests !== undefined ? guests : listing.guests,
        price: price || listing.price,
        amenities: parsedAmenities || listing.amenities,
        theType: theType || listing.theType,
        rating: rating !== undefined ? rating : listing.rating,
        images,
        updatedAt: new Date(),
      },
      { new: true }
    );

    res.status(200).json({
      message: "Listing updated successfully",
      listing: updatedListing,
    });
  } catch (error) {
    console.error("Error updating listing:", error);
    res.status(500).json({ error: "Failed to update listing", details: error.message });
  }
};

// Delete a listing
const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    // Delete listing from database (images are stored in DB, no file cleanup needed)
    await Listing.findByIdAndDelete(id);

    res.status(200).json({
      message: "Listing deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting listing:", error);
    res.status(500).json({ error: "Failed to delete listing", details: error.message });
  }
};

module.exports = {
  createListing,
  getAllListings,
  getListingById,
  updateListing,
  deleteListing,
};
