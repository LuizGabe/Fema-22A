import { Router } from 'express'

import { userRouter } from './router.user'

const router = Router()

router.use('/user', userRouter)

export { router }
