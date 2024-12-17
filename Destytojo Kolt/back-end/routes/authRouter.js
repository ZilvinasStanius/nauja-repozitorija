import express from 'express';
import * as authController from '../controllers/auth-controller.js';
const router = express.Router();

// http://localhost/server/api/auth/login
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/log-out', authController.logout);
export default router;
