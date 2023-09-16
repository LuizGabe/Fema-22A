import { EnsureAuthenticateUser } from '../middlewares/EnsureAuthenticateUser'
import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { sign } from 'jsonwebtoken'

const prisma = new PrismaClient()
const userRouter = Router()

// Get all users
userRouter.get('/all', EnsureAuthenticateUser, async (req, res) => {
  const getAll = await prisma.user.findMany()

  res.json(getAll)
})
// Get user by id
userRouter.get('/:id', EnsureAuthenticateUser, async (req, res) => {
  const { id } = req.params

  const getById = await prisma.user.findFirst({
    where: {
      id
    },
    select: {
      name: true,
      email: true,
      post: true
    }
  })
  res.json(getById)
})

// Get user by name or email
userRouter.get('/', EnsureAuthenticateUser, async (req, res) => {
  const { name, email } = req.query

  const getSearch = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: String(name)
          }
        },
        {
          email: {
            contains: String(email)
          }
        }
      ]
    }
  })

  res.json(getSearch)
})


interface IRequestBody {
  name: string
  email: string
  password: string
}

// Register user
userRouter.post('/register', async (req, res) => {
  const { name, email, password }: IRequestBody = req.body

  const userExist = await prisma.user.findFirst({ where: { email } })

  if (userExist) return res.status(404).json({ error: true, message: "Usuário já existe" })

  const createUser = await prisma.user.create({
    data: {
      name,
      email,
      password
    },
    select: {
      name: true,
      email: true,
      post: true
    }
  })

  res.json(createUser)

})

// Authenticate user
userRouter.post('/login', async (req, res) => {
  const { email, password }: IRequestBody = req.body
  
  const userExist = await prisma.user.findFirst({ where: { email } })

  if (!userExist) return res.status(404).json({ error: true, message: "Usuário não encontrado" })

  if (userExist.password !== password) return res.status(404).json({ error: true, message: "Email ou Senha inválida" })

  const token = sign({ email: userExist.email }, "ChaveSecreta", {
    subject: userExist.id,
    expiresIn: "1d"
  })

  res.json({ userExist, token })
})

// Update user
userRouter.put("/:id", EnsureAuthenticateUser, async (req, res) => {
  const { name, email, password }: IRequestBody = req.body;
  const { id } = req.params;

  const userExist = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!userExist)
    return res.status(400).json({ error: true, message: "Usuário não existe" });

  let newInfo:IRequestBody = {name:"", email:"", password:""}

  name === undefined || name === userExist.name
    ? (newInfo.name = userExist.name!)
    : (newInfo.name = name);

  email === undefined || email === userExist.email
    ? (newInfo.email = userExist.email!)
    : (newInfo.email = email);

  password === undefined || password === userExist.password
    ? (newInfo.password = userExist.password!)
    : (newInfo.password = password);
  
  const updateUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: newInfo.name,
      email: newInfo.email,
      password: newInfo.password,
    },
  });

  res.json(updateUser);
});

// Delete user
userRouter.delete('/:id', EnsureAuthenticateUser, async (req, res) => {
  const { id } = req.params

  const userExist = await prisma.user.findFirst({
    where: {
      id
    }
  })

  if (!userExist) return res.status(400).json({ error: true, message: "Usuário não existe" })

  const deleteUser = await prisma.user.delete({
    where: {
      id
    },
  })

  res.json(deleteUser)

})

export { userRouter }