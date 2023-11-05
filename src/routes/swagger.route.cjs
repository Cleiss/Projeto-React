const Router  = require ("express")

const swaggerUI = require ('swagger-ui-express')
/* swagger UI = user interface do swagger */

const swaggerDocument = require ("../swagger.json") 
/* swaggerDocument contém as especificações do projeto */



const swaggerRouter = Router()

swaggerRouter.use('/', swaggerUI.serve)
swaggerRouter.get('/', swaggerUI.setup(swaggerDocument))



module.exports = swaggerRouter

/* 
    todo o modelo deste arquivo foi alterado para CommonJS,
    devido a versão do Node no Render não suportar o modelo mais recente de importação (export default e import).
    o nome do arquivo tbm precisou ser trocado para '.cjs' 
    
*/