import express from 'express'
import { loginValidator } from '~/middlewares/users.middlewares'
import { loginController, registerController } from '~/controllers/users.controller'
const usersrouter = express.Router()
usersrouter.post('/login', loginValidator, loginController)
usersrouter.post('/register', registerController)
export default usersrouter
