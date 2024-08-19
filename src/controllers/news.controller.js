import newsService from '../services/news.service.js'

const create = async (req, res) => {

    try {
        const { title, text, banner } = req.body

        if (!title || !text || !banner) {
            res.status(400).send({
                message: 'Preencha todos os campos'
            })
        }

        await newsService.createService({
            title,
            text,
            banner,
            user: req.userId
        })

        res.sendStatus(201)

    } catch (erro) {
        res.status(500).send({ message: erro.message })
    }

}

const findAll = async (req, res) => {

    try {
        let { limit, offset } = req.query

        limit = Number(limit)
        offset = Number(offset)

        if (!limit) {
            limit = 5
        }

        if (!offset) {
            offset = 0
        }

        const news = await newsService.findAllService(offset, limit)
        const total = await newsService.countNews()
        const currentUrl = req.baseUrl

        const next = offset + limit
        /* next é basicamente a ''próxima URL'' da paginação */

        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${offset}` : null
        /* currentUrl neste caso é '/news' */

        const previous = offset - limit < 0 ? null : offset - limit

        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null

        if (news.length === 0) {
            return res.status(400).send({ message: 'não há notícias cadastradas' })
        }

        news.shift()

        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                nome: item.user.nome,
                userName: item.user.username,
                userFoto: item.user.foto

            }))
        })

    }

    catch (erro) {
        res.status(500).send({ message: erro.message })
    }

}

const topNews = async (req, res) => {

    try {
        const news = await newsService.topNewsService()

        if (!news) {
            return res.status(400).send({ message: 'não há post cadastrado' })
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                nome: news.user.nome,
                userName: news.user.username,
                userFoto: news.user.foto
            }
        })
    }

    catch (erro) {
        res.status(500).send({ message: erro.message })
    }

}

const findById = async (req, res) => {
    try {
        const { id } = req.params

        const news = await newsService.findByIdService(id)

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                nome: news.user.nome,
                userName: news.user.username,
                userFoto: news.user.foto
            }
        })
    }

    catch (erro) {
        res.status(500).send({ message: erro.message })
    }
}

const searchByTitleService = async (req, res) => {
    try {
        const { title } = req.query

        const news = await newsService.searchByTitleService(title)

        res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                nome: item.user.nome,
                userName: item.user.username,
                userFoto: item.user.foto

            }))
        })
    }

    catch (erro) {
        res.status(500).send({ message: erro.message })
    }
}

const searchByUserService = async (req, res) => {
    try {
        const id = req.userId
        /* 
        userId vem do middleware de auth através de news.route.js
        o id não está destruturado pq é o id do usuário, não da postagem.
        esse serviço busca apenas as postagens do usuário logado, não de outros.
        */

        const news = await newsService.searchByUserService(id)

        res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                nome: item.user.nome,
                userName: item.user.username,
                userFoto: item.user.foto

            }))
        })
    }
    catch (erro) {
        res.send(500).send({ message: erro.message })
    }
}

const updateService = async (req, res) => {
    try {
        const { title, text, banner } = req.body
        const { id } = req.params

        if (!title && !text && !banner) {
            res.status(400).send({ message: 'preencha pelo menos um campo para atualizar' })
        }

        const news = await newsService.findByIdService(id) /* buscando a postagem pelo id dela */
        /*console.log(news.user._id)
        console.log(req.params)
        console.log(news)*/

        if (String(news.user._id) !== req.userId /* userId vem de auth.middleware.js */) {
            res.status(400).send({ message: 'atualização não permitida' })
        }

        await newsService.updateService(id, title, text, banner) /* realiza e aguarda o retorno da atualização */

        res.send({ message: 'postagem atualizada com sucesso!' })
    }
    catch (erro) {
        res.send(500).send({ message: erro.message })
    }
}

const deleteService = async (req, res) => {
    try {
        const { id } = req.params

        const news = await newsService.findByIdService(id)

        if (String(news.user._id) !== req.userId) {
            res.status(400).send({ message: 'exclusão não permitida' })
        }

        await newsService.deleteService(id)

        res.send({ message: 'postagem excluída com sucesso!' })
    }
    catch (erro) {
        res.status(500).send({ message: erro.message })
    }
}

const likenews = async (req, res) => {
    try {
        const { id } = req.params

        const userId = req.userId

        const newsLiked = await newsService.likenews(id, userId) /* id da postagem; userId de quem tá curtindo. */

        if (!newsLiked) {
            await newsService.deleteNewsLiked(id, userId)

            return res.status(200).send({ message: 'curtida removida' })
        }

        res.status(200).send({ message: 'ok!' })
    }
    catch (erro) {
        res.status(500).send({ message: erro.message })
    }
}

const addComment = async (req, res) => {

    try {
        const { id } = req.params

        const userId = req.userId /* valor de userId vem do token decodificado no middleware */

        const { comment } = req.body

        if (!comment) {
            return res.status(400).send({ message: 'escreva um comentário' })
        }

        await newsService.addCommentService(id, comment, userId)

        res.send({ message: 'comentário enviado' })
    }
    catch (erro) {
        res.status(500).send({ message: erro.message })
    }

}

const deleteComment = async (req, res) => {

    try {
        const { idNews, idComment } = req.params

        const userId = req.userId /* valor de userId vem do token decodificado no middleware */ 

        const commentDelete = await newsService.deleteCommentService(idNews, idComment, userId)

        const commentFinder = commentDelete.comments.find((comment) => comment.idComment === idComment)

        if (!commentFinder) {
            return res.status(400).send({message: 'comentário não encontrado'})
        }

        if (commentFinder.userId !== userId) {
            return res.status(400).send({ message: 'você não pode excluir este comentário' })
        }

        res.send({ message: 'comentário excluído' })

    }
    catch (erro) {
        res.status(500).send({ message: erro.message })
    }
}


export default {
    create,
    findAll,
    topNews,
    findById,
    searchByTitleService,
    searchByUserService,
    updateService,
    deleteService,
    likenews,
    addComment,
    deleteComment
}

/* 
    newsService é o nome do 'pacote' que contém as variáveis exportadas.
    se as variáveis não fossem exportadas como default (utilizando apenas ''export {createService, findAllService }''), 
    a importação seria ''import {createService, findAllService } from '../services/news.service.js' 
*/

/* 'await' DEVE ser usado dentro de uma função assíncrona 'async' */