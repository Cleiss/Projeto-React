import mongoose from 'mongoose'
import userService from '../services/user.service.js'

const validId = (req, res, next) => {

    try {
        const id = req.userId

        if (!mongoose.Types.ObjectId.isValid(id)) {

            return res.status(400).send({ message: 'id de usuário inválido' })
        }

        //console.log(`id de usuário ${id} está chegando aqui sem import authmiddleware`)

        next()
    }
    catch (erro) {
        res.status(500).send({ message: "testando" })
    }

}

const validUser = async (req, res, next) => {

    try {
        const id = req.userId

        const usuario = await userService.findUserIdService(id)

        if (!usuario) {

            return res.status(400).send({ message: 'usuário não encontrado' })
        }

        req.id = id
        req.user = usuario

        //console.log(`aqui está o usuario ${usuario} sem import do authmiddleware`)

        next()
    }
    catch (erro) {
        res.status(500).send({ message: erro.message })
    }


}

export { validId, validUser}