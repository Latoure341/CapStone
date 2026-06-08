const express = require("express");
const multer = require("multer");
const {
  createListing,
  getAllListings,
  getListingById,
  updateListing,
  deleteListing,
} = require("../controllers/listingController");

const router = express.Router();

// Configure multer for image uploads (memory storage for database)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit per file
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only images are allowed."));
    }
  },
});

// Routes
router.post("/", upload.array("images", 10), createListing);
router.get("/", getAllListings);
router.get("/:id", getListingById);
router.put("/:id", upload.array("images", 10), updateListing);
router.delete("/:id", deleteListing);

module.exports = router;
