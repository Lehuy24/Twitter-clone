import { MongoClient, Db, Collection } from 'mongodb'
import dotenv from 'dotenv'
import User from '~/models/users.schema'
import { error } from 'console'
dotenv.config()
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twiter.vbena3k.mongodb.net/?retryWrites=true&w=majority&appName=Twiter`
class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_DATABASE)
  }
  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log('Error', error)
      throw error
    }
  }
  get users(): Collection<User> {
    return this.db.collection(process.env.USERS_COLLECTION as string)
  }
}
//create object from class Database
const databaseService = new DatabaseService()
export default databaseService
