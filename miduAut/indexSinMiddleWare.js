import express from 'express'
import { PORT, SECRET_JKT_KEY } from './config.js'
import { UserRepository } from './user-repository.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(cookieParser())
// a continuacion creamos un middleware
app.use((req, res, next) => {
  const token = req.cookies.access_token
  req.session = { user: null }
  try {
    const data = jwt.verify(token, SECRET_JKT_KEY)
    req.session.user = data
  } catch {}
  next() // seguir a la siguiente ruta o middleware
})

app.get('/', (req, res) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.render('index')
  }
  try {
    const data = jwt.verify(token, SECRET_JKT_KEY)
    res.render('index', data) // id username
  } catch (error) {
    res.render('index')
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await UserRepository.login({ username, password })
    const token = jwt.sign(
      { id: user._id, username: user.username },
      SECRET_JKT_KEY,
      {
        expiresIn: '1h'
      })
    res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60
      })
      .send({ user, token }) // es mejor gardar en las cookies
  } catch (error) {
    res.status(401).send(error.message) // esto no es lo mejor, se recomienda no enviar todo el mensaje
  }
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  console.log(req.body)
  try {
    const id = await UserRepository.create({ username, password })
    res.send({ id })
  } catch (error) {
    // normalmente no es buena idea mandar el error del repositorio (user-repository)
    res.status(400).send(error.message)
  }
})

app.post('/logout', (req, res) => {

})

app.get('/protected', (req, res) => {
  const token = req.cookies.access_token
  if (!token) {
    res.status(403).send('Access not authorized')
  }

  try {
    const data = jwt.verify(token, SECRET_JKT_KEY)
    res.render('protected', data) // id username
  } catch (error) {
    res.status(401).send('Acces not authorized')
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
