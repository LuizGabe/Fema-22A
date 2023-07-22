import express from 'express'
import userRoute from './routes/userRouter'

const App = express()
const port = 5000

App.use(express.json())

App.get('/hello', (req: any, res: any) => {
    res.send('hello world!')
})

App.use('/user', userRoute)

App.listen(port, () => {
    console.log(`Server Iniciado na porta ${port}`)
})