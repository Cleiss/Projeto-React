import newsService from '../services/news.service.js'

const create = async (req, res) => {

    try {
        const {title, text, banner} = req.body

        if (!title || !text || !banner) {
            res.status(400).send({
                message: 'Preencha todos os campos'
            })
        }

        await newsService.createService ({
            title,
            text,
            banner,
            user: { _id: "642870fe396f38c22071dd7a"}
        })

        res.sendStatus(201)

    } catch (erro) {
        res.status(500).send({message: erro.message})
    }

}

const findAll = async (req, res) => {
    const news = await newsService.findAllService()

    if (news.length === 0) {
        return res.status(400).send({ message: 'não há notícias cadastradas' })
    }
    
    res.send(news)
}

export default {create, findAll}

/* 
    newsService é o nome do 'pacote' que contém as variáveis exportadas.
    se as variáveis não fossem exportadas como default (utilizando apenas ''export {createService, findAllService }''), 
    a importação seria ''import {createService, findAllService } from '../services/news.service.js' 
*/

/* 'await' DEVE ser usado dentro de uma função assíncrona 'async' */