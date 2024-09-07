import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import userService from "../services/user.service.js"

dotenv.config()

const authMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers

        if (!authorization) {
            return res.sendStatus(401)
        }

        const parts = authorization.split(' ')

        if (parts.length !== 2) {
            res.send(401)
        }

        const [schema, token] = parts

        if (schema !== 'Bearer') {
            return res.send(401)
        }

        jwt.verify(token, process.env.SECRET_JWT, async (erro, decoded) => {
            if (erro) {
                return res.status(401).send({ message: 'token inválido' })
            }

            const user = await userService.findUserIdService(decoded.id)

            if (!user || !user.id) {
                return res.status(401).send({ message: 'token inválido' })
            }

            req.userId = user.id

            //console.log(`id ${req.userId} ou ${user.id} está sendo enviado`)

            return next()
        })

    }

    catch (erro) {
        res.status(500).send(erro.message)
    }

}

export default authMiddleware