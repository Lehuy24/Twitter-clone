import express from 'express'
import databaseService from './services/database.service'
import usersrouter from './routes/users.routes'
const app = express()
const port = 3000
app.use(express.json()) // process json from postman
databaseService.connect()
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use((req, res, next) => {
  console.log('Time ', Date.now())
  next()
})
app.use('/api', usersrouter)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
