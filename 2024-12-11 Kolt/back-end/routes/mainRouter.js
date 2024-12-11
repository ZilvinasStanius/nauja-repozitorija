import express from 'express';
import scooterRouter from './scootersRouter.js';
import scootersLeaseHistoryRouter from './scootersLeaseHistoryRouter.js';
const router = express.Router();

router.use('/scooters', scooterRouter);
router.use('/scooters-lease-history', scootersLeaseHistoryRouter);

export default router;
