import db from '../models/index.js'
import jwt from 'jsonwebtoken'
import { sendConfirmationEmail } from '../utils/emailService.js'
const { User } = db

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const userExists = await User.findOne({ where: { email } })

    if (userExists) {
      return res.status(400).json({ message: 'Usuário já cadastrado!' })
    }

    const user = await User.create({
      name,
      email,
      password,
      isEmailConfirmed: false,
    })

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    const confirmationUrl = `${process.env.BASE_URL}/confirm-email?token=${token}`

    await sendConfirmationEmail(email, confirmationUrl)

    return res.status(201).json({
      message: 'Usuário cadastrado com sucesso!',
      user: { id: user.id, name: user.name, email: user.email },
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao cadastrar usuário', error })
  }
}
