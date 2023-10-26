import { Router } from 'express'
import newsController from '../controllers/news.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = Router()


router.post('/', authMiddleware, newsController.create)
router.get('/', newsController.findAll)
router.get('/top', newsController.topNews)
router.get('/search', newsController.searchByTitleService)
router.get('/byuser', authMiddleware, newsController.searchByUserService)

router.get('/:id', authMiddleware, newsController.findById)
router.patch('/:id', authMiddleware, newsController.updateService)
router.delete('/:id', authMiddleware, newsController.deleteService)

router.patch('/like/:id', authMiddleware, newsController.likenews)
router.patch('/comment/:id', authMiddleware, newsController.addComment)
router.patch('/comment/:idNews/:idComment', authMiddleware, newsController.deleteComment)

/*
funções criadas em news.controller.js.
router.get('/:id', newsController.findById) possui um parâmetro e precisa ser declarado por último na listagem 
para que não haja erro na comunicação com o BD.
*/


export default router

/* newsController é o nome do 'pacote' que contém as variáveis exportadas */
