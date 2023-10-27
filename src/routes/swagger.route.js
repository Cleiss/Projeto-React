import { Router } from "express";

import swaggerUI from 'swagger-ui-express'
/* swagger UI = user interface do swagger */

import swaggerDocument from '../swagger.json' assert {type: "json"}
/* swaggerDocument contém as especificações do projeto */

const swaggerRouter = Router()

swaggerRouter.use('/', swaggerUI.serve)
swaggerRouter.get('/', swaggerUI.setup(swaggerDocument))



export default swaggerRouter