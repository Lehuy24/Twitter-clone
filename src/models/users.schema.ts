import { ObjectId } from 'mongodb'
enum UserverifyStatus {
  Unverified,
  Veriied,
  Banned
}
interface UserType {
  _id?: ObjectId
  name?: string
  email: string
  date_of_birth?: Date
  password: string
  created_at?: Date
  update_at?: Date
  email_veriy_token?: string
  verify?: UserverifyStatus
  bio?: string
  location?: string
  website?: string
  username?: string
  avatar?: string
  cover_photo?: string
}
export default class User {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  created_at: Date
  update_at: Date
  email_veriy_token: string
  verify: UserverifyStatus
  bio: string
  location: string
  website: string
  username: string
  avatar: string
  cover_photo: string
  constructor(user: UserType) {
    const date = new Date()
    this._id = user._id
    this.name = user.name || ''
    this.email = user.email
    this.date_of_birth = user.date_of_birth || new Date()
    this.password = user.password
    this.created_at = user.created_at || date
    this.update_at = user.update_at || date
    this.email_veriy_token = user.email_veriy_token || ''
    this.verify = user.verify || UserverifyStatus.Unverified
    this.bio = user.bio || ''
    this.location = user.location || ''
    this.website = user.website || ''
    this.username = user.username || ''
    this.avatar = user.avatar || ''
    this.cover_photo = user.cover_photo || ''
  }
}
