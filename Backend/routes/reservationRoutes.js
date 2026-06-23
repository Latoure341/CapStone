import express from 'express';
import { postReservation, reservedPlace, removeReservation } from '../controllers/reservationController.js';

const router = express.Router();

router.post('/reserve', postReservation);
router.get('/reservedPlace', reservedPlace);
router.delete('/delete', removeReservation);

export default router;