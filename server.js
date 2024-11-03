import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/userRoutes.js'
import emailRoutes from './routes/emailRoutes.js'

import db from './models/index.js'

const app = express()
const PORT = process.env.PORT || 3000

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.')
    return db.sequelize.sync({ alter: true })
  })
  .then(() => console.log('Sincronização completa com o banco de dados.'))
  .catch((error) =>
    console.error(
      'Erro ao conectar ou sincronizar com o banco de dados:',
      error,
    ),
  )

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Hello world!')
})

app.get('/', (req, res) => {
  res.send('Hello ZBMFLabs!')
})

app.use('/signup', userRoutes)
app.use('/', emailRoutes)

app.listen(PORT, () => {
  console.log(`Server running into port: ${PORT}`)
})
