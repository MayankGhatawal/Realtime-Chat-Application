import express from 'express';
import { protectRoutes } from '../middleware/auth.middleware.js';
import { getMessages, getUserForSidebar } from '../controllers/message.controller.js';

const router = express.Router();

// Define routes
router.get('/users', protectRoutes, getUserForSidebar)
router.get('/:id', protectRoutes, getMessages)

export default router;