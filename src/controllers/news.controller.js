import newsService from '../services/news.service.js'

const create = async (req, res) => {

    try {
        const {title, text, banner} = req.body

        if(!title || !text|| !banner) {
            res.status(400).send({
                message: 'Preencha todos os campos'
            })
        }

        await createService ({
            title,
            text,
            banner,
            id: 'objectidfake'
        })
        
        res.send(201)

    } catch (erro) {
        res.status(500).send({message: erro})
    }

}

const findAll = (req, res) => {
    const news = []
    res.send(news)
}

export default {create, findAll}

/* newsService é o nome do 'pacote' que contém as variáveis exportadas */
/* 'await' DEVE ser usado dentro de uma função assíncrona 'async' */