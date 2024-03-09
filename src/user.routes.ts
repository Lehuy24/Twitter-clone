import express from 'express'
const userrouter = express.Router()
userrouter.use((req, res , next) => {
  console.log('Time : ', Date.now())
  next()
})
userrouter.get('/tweet', (req, res) => {
  res.send('hello eorld')
})
export default userrouter
