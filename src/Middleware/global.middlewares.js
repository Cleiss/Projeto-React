const mongoose = require ('mongoose')
const userService = require('../services/user.service')

const validId = (req, res, next) => {

    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(400).send({message: 'id de usuário inválido'})
    }

    next()

}

const validUser = async (req, res, next) => {

    const id = req.params.id

    const usuario = await userService.findIdservice(id)

    if (!usuario) {

        return res.status(400).send({message: 'id de usuário não encontrado'})
    }

    next()

}

module.exports = {validId, validUser}