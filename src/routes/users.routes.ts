import express from 'express'
import { loginValidator } from '~/middlewares/users.middlewares'
import { loginController } from '~/controllers/users.controller'
const usersrouter = express.Router()
usersrouter.post('/login', loginValidator, loginController)
export default usersrouter
