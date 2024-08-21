import route from 'express'
const router = route()
import userController from '../controllers/user.controller.js'
import { validId, validUser } from '../middlewares/global.middlewares.js'

//ROTA
//Métodos HTTP (CRUD)
//Nome (Identificador da rota; '/nome')
//Function (callback)

router.post('/criar', userController.createUser)

router.get('/', userController.readUsers)

router.get('/:id', validId, validUser, userController.findIdUser)

router.patch('/updt/:id', validId, validUser, userController.updtIdUser)

export default router

/* userController é o nome do objeto/'pacote' que contém as variáveis exportadas */