import db from '../models/index.js'

const { Category } = db

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body
    console.log(req.user)
    const userId = req.user.userId

    if (!name) {
      return res
        .status(400)
        .json({ message: 'O nome da categoria é obrigatório.' })
    }

    // Verifica se a categoria já existe para este usuário
    const existingCategory = await Category.findOne({
      where: { name, userId },
    })

    if (existingCategory) {
      return res
        .status(409)
        .json({ message: 'Esta categoria já existe para o usuário.' })
    }

    // Criar a nova categoria
    const newCategory = await Category.create({ name, userId })

    return res.status(201).json(newCategory)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao criar a categoria....' })
  }
}
