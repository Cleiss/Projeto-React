import express from 'express'
import connectDB from './src/database/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3000  /* process.env.PORT é definido pelo servidor*/

import authRouter from './src/routes/auth.route.js'
import userRouter from './src/routes/user.route.js'
import newsRouter from './src/routes/news.route.js'
import swaggerRouter from './src/routes/swagger.route.cjs'


dotenv.config() /* dotenv está aqui pq a função que executa o banco de dados está sendo executada aqui no index.js*/
app.use(cors()) /* módulo que habilita CORS para vários endpoints. evita o problema de Access-Control-Allow-Origin. */


connectDB()
app.use(express.json())
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/news', newsRouter)
app.use('/doc', swaggerRouter)

app.listen(port, () => {
    console.log('Servidor aberto, aguardando MongoDB...')
})