import express from 'express';
import { signup, login, logout, updateUser, checkAuth } from '../controllers/auth.controller.js';
import { protectRoutes } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout/', logout);
router.put('/update-user',protectRoutes, updateUser);
router.get('/check', protectRoutes, checkAuth);

export default router;