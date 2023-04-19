const route = require ('express')
const router = route()
const userController = require('../controllers/user.controller')
const {validId, validUser} = require ('../middlewares/global.middlewares')

//ROTA
    //Métodos HTTP (CRUD)
    //Nome (Identificador da rota; '/nome')
    //Function (callback)

router.post ('/', userController.criar)

router.get ('/', userController.read)

router.get ('/:id', validId, validUser, userController.findId)

router.patch('/:id', validId, validUser, userController.updtId)

module.exports = router