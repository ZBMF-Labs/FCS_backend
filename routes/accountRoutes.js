import express from 'express'
import { authenticateUser } from '../middlewares/authMiddleware.js'
import {
  createAccount,
  getAccountById,
  getAllAccounts,
} from '../controllers/accountController.js'

const router = express.Router()

router.post('/', authenticateUser, createAccount)
router.get('/', authenticateUser, getAllAccounts)
router.get('/:id', authenticateUser, getAccountById)

export default router
