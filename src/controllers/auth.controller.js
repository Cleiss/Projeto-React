import bcrypt from 'bcrypt'
import {loginService, generateToken} from '../services/auth.service.js'

const login = async (req, res) => {

    const { email, senha } = req.body

    try {
        const user = await loginService(email)

        if (!user) {
            return res.status(404).send({ message: 'senha ou usuário inválido' })
        }

        const senhavalida = bcrypt.compareSync(senha, user.senha)

        if (!senhavalida) {
            return res.status(400).send({ message: 'senha ou usuário inválido' })
        }

        const token = generateToken(user.id)

        res.send({token}) /* é enviado como objeto (será visto como json) ao client para que guarde a sessão */

    }
    catch (erro) {

        res.status(500).send(erro.message)
    }
}

export default login