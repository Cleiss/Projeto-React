import express from 'express'
import connectDB from './src/database/db.js'
const app = express()


import dotenv from 'dotenv'
const port = process.env.PORT || 3000 /* process.env.PORT é definido pelo servidor*/

import authRouter from './src/routes/auth.route.js'
import userRouter from './src/routes/user.route.js'



dotenv.config() /*dotenv está aqui pq a função que executa o banco de dados está sendo executada aqui no index.js*/

connectDB()
app.use(express.json())
app.use('/user', userRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
    console.log('Servidor aberto, aguardando Mongo...')
})