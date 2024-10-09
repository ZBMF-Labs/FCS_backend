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

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
)

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== path.basename(import.meta.url) &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    )
  })
  .forEach(async (file) => {
    const { default: model } = await import(path.join(__dirname, file))
    db[model.name] = model(sequelize, Sequelize.DataTypes)
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
