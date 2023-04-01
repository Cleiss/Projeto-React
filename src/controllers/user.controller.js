const create = (req, res) => {

    const {nome, user, email, senha, foto, background} = req.body
    
    if (!nome || !user || !email || !senha || !foto || !background) {

        res.status(400).send({message: 'Preencha todos os campos!'})
    }
    
    res.status(201).send({
        
        user: {
            "nome": "cleitin",
            "user": "cleis",
            "email": "cleitonsns@gmail.com",
            "senha": "123",
            "foto": "https://avatars.githubusercontent.com/u/93230836?v=4",
            "background": "https://st3.depositphotos.com/16163280/18497/i/1600/depositphotos_184971874-stock-photo-80s-retro-futuristic-city-background.jpg"
        },
        message: "user criado com sucesso!"
    })
}

const read = (req, res) => {

    res.send('rota ok')
}

module.exports = {create, read}