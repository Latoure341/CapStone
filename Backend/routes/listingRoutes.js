import express from 'express';
import multer from 'multer';
import {
  createListing,
  getAllListings,
  getListingById,
  updateListing,
  deleteListing,
} from '../controllers/listingController.js';
import { optionalAuth } from '../middleware/auth.js';

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only images are allowed."));
    }
  },
});

router.post("/", optionalAuth, upload.array("images", 10), createListing);
router.get("/", getAllListings);
router.get("/:id", getListingById);
router.put("/:id", optionalAuth, upload.array("images", 10), updateListing);
router.delete("/delete", optionalAuth, deleteListing);

export default router;
