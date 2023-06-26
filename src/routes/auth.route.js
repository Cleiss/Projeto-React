import { Router } from 'express'
import login from '../controllers/auth.controller.js'

const router = Router()

router.post('/', login) /*autenticação é feita através do método POST*/

export default router