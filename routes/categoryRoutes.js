import express from 'express'
import {
  createCategory,
  getCategories,
  updateCategories,
} from '../controllers/categoriesController.js'
import { authenticateUser } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.post('/', authenticateUser, createCategory)
router.get('/', authenticateUser, getCategories)
router.put('/:id', authenticateUser, updateCategories)

export default router
