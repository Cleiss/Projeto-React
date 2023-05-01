import userService from "../services/user.service.js"


const criar = async (req, res) => {

    try {
        const { nome, username, email, senha, foto, background } = req.body

        if (!nome || !username || !email || !senha || !foto || !background) {

            res.status(400).send({ message: 'Preencha todos os campos!' })
        }

        const user = await userService.create(req.body)

        if (!user) {

            return res.status(400).send({ message: "erro ao criar usuário" })
        }

        res.status(201).send({

            user: {
                id: user._id,
                nome,
                username,
                email,
                senha,
                foto,
                background
            },
            message: "user criado com sucesso!"
        })
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }
}

const read = async (req, res) => {

    try {
        const usuarios = await userService.findAll()

        if (usuarios.length === 0) {
            return res.status(400).send({ message: 'não há usuários cadastrados' })
        }

        res.send(usuarios)
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }

}

const findId = async (req, res) => {

    try {
        const id = req.id /*valor vem do middleware (assim não precisa consultar o bd)*/

        const usuario = req.user /*valor vem do middleware (assim não precisa consultar o bd)*/

        res.send(usuario)
    }
    catch (erro) {
        res.status(500).send({ message: erro })
    }
}

const updtId = async (req, res) => {

    try {
        const { nome, username, email, senha, foto, background } = req.body

        if (!nome && !username && !email && !senha && !foto && !background) {

            res.status(400).send({ message: 'preencha pelo menos um campo para atualizar' })
        }

        const id = req.id /*valor vem do middleware (assim não precisa consultar o bd)*/

        const usuario = req.user /*valor vem do middleware (assim não precisa consultar o bd)*/

        await userService.updt(
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

export default { criar, read, findId, updtId }