import route from 'express'
const router = route()
import userController from '../controllers/user.controller.js'
import { validId, validUser } from '../middlewares/global.middlewares.js'

//ROTA
//Métodos HTTP (CRUD)
//Nome (Identificador da rota; '/nome')
//Function (callback)

router.post('/criar', userController.create)

router.get('/', userController.read)

router.get('/:id', validId, validUser, userController.findId)

router.patch('/:id', validId, validUser, userController.updtId)

export default router

/* userController é o nome do 'pacote' que contém as variáveis exportadas */