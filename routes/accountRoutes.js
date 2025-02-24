import express from 'express'
import { authenticateUser } from '../middlewares/authMiddleware.js'
import {
  createAccount,
  getAllAccount,
} from '../controllers/accountController.js'

const router = express.Router()

router.post('/', authenticateUser, createAccount)
router.get('/', authenticateUser, getAllAccount)

export default router
