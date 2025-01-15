import express from 'express';
import { Register, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

// Define routes
router.post('/signup', Register);
router.post('/login', login);
router.get('/logout/:id', logout);

export default router;