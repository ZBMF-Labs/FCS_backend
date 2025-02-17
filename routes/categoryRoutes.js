import express from 'express'
import {
  createCategory,
  getCategories,
} from '../controllers/categoriesController.js'
import { authenticateUser } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.post('/', authenticateUser, createCategory)
router.get('/', authenticateUser, getCategories)

export default router
