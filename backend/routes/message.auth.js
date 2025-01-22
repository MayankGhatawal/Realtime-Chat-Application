import express from 'express';
import { protectRoutes } from '../middleware/auth.middleware.js';
import { getMessages, getUserForSidebar, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

// Define routes
router.get('/users', protectRoutes, getUserForSidebar)
router.get('/:id', protectRoutes, getMessages)
router.post('/send/:id', protectRoutes, sendMessage)

export default router;