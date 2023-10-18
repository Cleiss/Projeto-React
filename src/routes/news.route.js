import { Router } from 'express'
import newsController from '../controllers/news.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'


const router = Router()


router.post('/', authMiddleware, newsController.create)
router.get('/', newsController.findAll)
/* funções create e findAll são criadas em news.controller.js */

export default router

/* newsController é o nome do 'pacote' que contém as variáveis exportadas */
