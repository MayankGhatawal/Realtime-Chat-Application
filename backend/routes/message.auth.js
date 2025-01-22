import express from 'express';
import { protectRoutes } from '../middleware/auth.middleware.js';
import { getUserForSidebar } from '../controllers/message.controller.js';

const router = express.Router();

// Define routes
router.get('/users', protectRoutes, getUserForSidebar)

export default router;