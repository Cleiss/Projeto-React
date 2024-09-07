import userService from "../services/user.service.js"
import {generateToken} from "../services/auth.service.js"


const createUser = async (req, res) => {

    try {
        const { nome, username, email, senha, foto, background } = req.body

        if (!nome || !username || !email || !senha || !foto || !background) {

            res.status(400).send({ message: 'Preencha todos os campos!' })
        }

        const user = await userService.createUserService(req.body)

        if (!user) {

            return res.status(400).send({ message: "erro ao criar usuário" })
        }

        const token = generateToken(user.id);

        res.status(201).send({
            token,
            message: "Usuário criado com sucesso!"
        })

        //console.log(token)

    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }
}

const readUsers = async (req, res) => {

    try {
        const usuarios = await userService.findAllUsersService()

        if (usuarios.length === 0) {
            return res.status(400).send({ message: 'Não há usuários cadastrados' })
        }

        res.send(usuarios)
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }

}

const findIdUser = async (req, res) => {

    try {
        const id = req.id /*valor vem do middleware (assim não precisa consultar o bd)*/

        const usuario = req.user /*valor vem do middleware (assim não precisa consultar o bd)*/

        //console.log(`testando o user do controller ${usuario}`)

        res.send(usuario)
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }
}

const findEmailUser = async (req, res) => {

    try {
        const usuarios = await userService.findUserEmailService()

        if (usuarios.length === 0) {
            return res.status(400).send({ message: 'Não há usuários cadastrados com este email' })
        }

        res.send(usuarios)
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }

}

const updtIdUser = async (req, res) => {

    try {
        const { nome, username, email, senha, foto, background } = req.body

        if (!nome && !username && !email && !senha && !foto && !background) {

            res.status(400).send({ message: 'Preencha pelo menos um campo para atualizar' })
        }

        const id = req.id /*valor vem do middleware (assim não precisa consultar o bd)*/

        const usuario = req.user /*valor vem do middleware (assim não precisa consultar o bd)*/

        await userService.updtUserService(
            id,
            nome,
            username,
            email,
            senha,
            foto,
            background
        )

        res.status(201).send('usuário atualizado com sucesso!')
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }

}

export default { createUser, readUsers, findIdUser, findEmailUser, updtIdUser }

/* userService é o nome do 'pacote' que contém as variáveis exportadas */