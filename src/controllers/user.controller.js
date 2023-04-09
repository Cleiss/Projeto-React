const userService = require ("../services/user.service")

const criar = async (req, res) => {

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

    const usuario = await userService.findIdservice(id)

    res.send(usuario)
}

const updtId = async (req, res) => {

    const {nome, username, email, senha, foto, background} = req.body

    if (!nome && !username && !email && !senha && !foto && !background) {

        res.status(400).send({message:'preencha pelo menos um campo para atualizar'})
    }

    const id = req.params.id

    await userService.updt (
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

module.exports = {criar, read, findId, updtId}