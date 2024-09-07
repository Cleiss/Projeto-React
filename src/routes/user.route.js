import route from 'express'
import userController from '../controllers/user.controller.js'
import { validId, validUser } from '../middlewares/global.middlewares.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = route()

//ROTA
//Métodos HTTP (CRUD)
//Nome (Identificador da rota; '/nome')
//Function (callback)

router.get('/', userController.readUsers)

router.post('/criar', userController.createUser)

router.use(authMiddleware)

router.get('/:id', validId, validUser, userController.findIdUser)

router.patch('/updt/:id', validId, validUser, userController.updtIdUser)

export default router

/* userController é o nome do objeto/'pacote' que contém as variáveis exportadas */