const route = require ('express')
const router = route()

const userController = require('../controllers/user.controller')

//ROTA
    //Métodos HTTP (CRUD)
    //Nome (Identificador da rota; '/nome')
    //Function (callback)

router.post ('/', userController.criar)

router.get ('/', userController.read)

router.get ('/:id', userController.findId)

router.patch('/:id', userController.updtId)

module.exports = router