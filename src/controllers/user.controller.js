const userService = require ("../services/user.service")

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

const read = (req, res) => {

    res.send('rota ok')
}

module.exports = {perfil, read}