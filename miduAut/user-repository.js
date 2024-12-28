import DBLocal from 'db-local'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { SALT } from './config.js'
const { Schema } = new DBLocal({ path: './db' })

const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

export class UserRepository {
  static async create ({ username, password }) {
    // validaciones username como zod
    Validation.username(username)
    Validation.password(password)
    // asegurarse que el username no existe
    const user = User.findOne({ username })
    if (user) throw new Error('Username already exists')

    const id = crypto.randomUUID()
    const hasedPassword = await bcrypt.hash(password, SALT) // el diez genera el password hackeado, numero de vueltas mayor seguridad

    User.create({
      _id: id,
      username,
      password: hasedPassword
    }).save()
    return id
  }

  static async login ({ username, password }) {
    // validaciones de username
    Validation.username(username)
    Validation.password(password)

    const user = User.findOne({ username })
    if (!user) throw new Error('username does not exists')
    const isValid = await bcrypt.compareSync(password, user.password)
    if (!isValid) throw new Error('Password is invalid')
    const { password: _, ...publicUser } = user
    return publicUser
  }
}

class Validation {
  static username (username) {
    if (typeof username !== 'string') throw new Error('username must be a string')
    if (username.length < 3) throw new Error('username must be at least 3 characters long')
  }

  static password (password) {
    if (typeof password !== 'string') throw new Error('password must be a string')
    if (password.length < 6) throw new Error('password must be at least 6 character long')
  }
}
