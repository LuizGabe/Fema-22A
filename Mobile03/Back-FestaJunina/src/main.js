import express from 'express';
import cors from 'cors';
import routes from './routes/Routes.js';

const app = express();
const port = 3000

// Middleware para logar as requisições
app.use((req, res, next) => {
  console.log(
    `[${new Date().toLocaleString('pt-BR',)}] - ${req.headers["x-forwarded-for"] || req.socket.remoteAddress
    } - ${req.method} - ${req.originalUrl}`
  );
  next()
})

// Middleware: CORS, JSON e Rotas
app.use(cors());
app.use(express.json())
app.use(routes)

// Rodando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} 🚀🚀🚀🚀🚀🚀`);
})