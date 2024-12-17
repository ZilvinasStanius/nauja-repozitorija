import express from 'express';
import * as leaseHistory from '../controllers/scoters-history-controller.js';

const router = express.Router();

router.get('/', leaseHistory.getAllScootersHistory);
router.get('/:id', leaseHistory.getScooterHistoryById);
router.post('/:id', leaseHistory.createScooterHistoryRecord);
router.put('/:id', leaseHistory.updateLeaseHistory);

export default router;
