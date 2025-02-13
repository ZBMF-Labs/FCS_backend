import express from 'express'
import { createCategory } from '../controllers/categoriesController.js'
import { authenticateUser } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.post('/', authenticateUser, createCategory)

export default router
