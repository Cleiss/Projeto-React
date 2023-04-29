const mongoose = require('mongoose')
const userService = require('../services/user.service')

const validId = (req, res, next) => {

    try {
        const id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)) {

            return res.status(400).send({ message: 'id de usuário inválido' })
        }

        next()
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }

}

const validUser = async (req, res, next) => {

    try {
        const id = req.params.id

        const usuario = await userService.findIdservice(id)

        if (!usuario) {

            return res.status(400).send({ message: 'usuário não encontrado' })
        }

        req.id = id
        req.user = usuario

        next()
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }

}

module.exports = { validId, validUser }