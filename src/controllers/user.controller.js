const userService = require ("../services/user.service")
const mongoose = require ('mongoose')

const perfil = async (req, res) => {

    const {nome, username, email, senha, foto, background} = req.body
    
    if (!nome || !username || !email || !senha || !foto || !background) {

        res.status(400).send({message: 'Preencha todos os campos!'})
    }
    
    const user = await userService.create(req.body)

    if (!user){

        return res.status(400).send({message: "erro ao criar usuário"})
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

const read = async (req, res) => {

   const usuarios = await userService.findAll()

   if (usuarios.length === 0) {
    return res.status(400).send({message: 'não há usuários cadastrados'})
   }

   res.send(usuarios)
}

const findId = async (req, res) => {

    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(400).send({message: 'id de usuário inválido'})
    }

    const usuario = await userService.findIdservice(id)

    if (!usuario) {
        
        return res.status(400).send({message: 'id de usuário não encontrado'})
    }

    res.send(usuario)
}

module.exports = {perfil, read, findId}