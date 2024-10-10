import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Hello world!')
})

app.get('/', (req, res) => {
  res.send('Hello ZBMFLabs!')
})

app.listen(PORT, () => {
  console.log(`Server running into port: ${PORT}`)
})
