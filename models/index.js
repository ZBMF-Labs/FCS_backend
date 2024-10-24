'use strict'

import 'dotenv/config' // Carrega as variáveis do arquivo .env
import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import configFile from '../config/config.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const env = process.env.NODE_ENV || 'development'
const config = configFile[env]
const db = {}

// Inicializa o Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

// Lê os arquivos de model no diretório atual
const modelFiles = fs.readdirSync(__dirname).filter((file) => {
  // Filtra apenas arquivos .js e ignora o próprio index.js
  return (
    file.indexOf('.') !== 0 &&
    file !== path.basename(__filename) &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  )
})

// Usa for..of para garantir async/await
for (const file of modelFiles) {
  const { default: model } = await import(path.join(__dirname, file))
  const modelInstance = model(sequelize, Sequelize.DataTypes)
  db[modelInstance.name] = modelInstance
}

// Configura associações entre models, se existirem
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// Exporta o objeto `db` contendo todos os models e a instância do Sequelize
db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
