import db from '../models/index.js'
const { User } = db

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const userExists = await User.findOne({ where: { email } })

    if (userExists) {
      return res.status(400).json({ message: 'Usuário já cadastrado!' })
    }

    const user = await User.create({ name, email, password })
    return res
      .status(201)
      .json({ message: 'Usuário cadastrado com sucesso!', user })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao cadastrar usuário', error })
  }
}
