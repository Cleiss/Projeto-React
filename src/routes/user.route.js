const route = require ('express')
const router = route()

const userController = require('../controllers/user.controller')

//ROTA
    //Métodos HTTP (CRUD)
    //Nome (Identificador da rota; '/nome')
    //Function (callback)

router.post ('/', userController.perfil)

router.get ('/', userController.read)

module.exports = router