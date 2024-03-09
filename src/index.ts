import express from 'express'

import userrouter from './user.routes'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})
app.use((req, res, next) => {
  console.log('Time ', Date.now())
  next()
})
app.use('/api', userrouter)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
