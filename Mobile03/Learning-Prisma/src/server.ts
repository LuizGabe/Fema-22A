import express from 'express'
import { router } from './routers/index'

const server = express()
const port = 3000

server.use(express.json())

// Middleware
server.use((req, res, next) => {
    console.log(
        `[${new Date().getTime()}] - ${req.headers["x-forwarded-for"] || req.socket.remoteAddress} - ${req.method} - ${req.originalUrl}`
    )
    next()
})

// Routes
server.use(router)

// Error
server.use((req, res, next) => {
    res.status(404).json({message: "Erro ao acessar a rota!"})
})

// Server Listen
server.listen(port, () => {
    console.log(`Server in running - http://localhost:${port} `);
})