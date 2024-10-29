import express from 'express'
import { registerUser } from '../controllers/userController.js'
import { hashPassword } from '../middlewares/hashedPassword.js'

const router = express.Router()

router.post('/', hashPassword, registerUser)

export default router
