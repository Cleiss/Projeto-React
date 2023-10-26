import { Router } from "express";
const router = Router()

import swaggerUI from 'swagger-ui-express'
/* swagger UI = user interface do swagger */

import swaggerDocument from '../swagger.json' assert {type: "json"}
/* swaggerDocument contém as especificações do projeto */

router.use('/', swaggerUI.serve)
router.get('/', swaggerUI.setup(swaggerDocument))



export default router