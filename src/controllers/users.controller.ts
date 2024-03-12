import { Request, Response } from 'express'
import databaseService from '~/services/database.service'
import User from '~/models/users.schema'
export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    return res.status(200).json({
      error: 'Register sucess'
    })
  } catch {
    return res.status(400).json({
      error: 'Register fail'
    })
  }
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    console.log(result)
    return res.status(200).json({
      error: 'Register sucess'
    })
  } catch (e) {
    console.log('Register fail because ', e)
    return res.status(400).json({
      error: 'Register fail'
    })
  }
}
