import bcrypt from 'bcrypt'
import loginService from '../services/auth.service.js'

const login = async (req, res) => {

    const { email, senha } = req.body

    try {
        const user = await loginService(email)

        if (!user) {
            return res.status(404).send({ message: 'senha ou usuário inválido' })
        }

        const senhavalida = await bcrypt.compare(senha, user.senha)

        if (!senhavalida) {
            return res.status(400).send({ message: 'senha ou usuário inválido' })
        }

        console.log(senhavalida)

        res.send('login ok')
    }
    catch (erro) {

        res.status(500).send(erro.message)
    }
}

export default login