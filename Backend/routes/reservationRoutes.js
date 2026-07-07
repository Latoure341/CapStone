import express from 'express';
import { postReservation, reservedPlace, removeReservation } from '../controllers/reservationController.js';
import { optionalAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/reserve', optionalAuth, postReservation);
router.get('/reservedPlace', reservedPlace);
router.delete('/delete', optionalAuth, removeReservation);

export default router;