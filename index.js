import express from 'express'
import userRouter from './src/routes/user.route.js'
import connectDB from './src/database/db.js'
import dotenv from 'dotenv'
dotenv.config() /*dotenv está aqui pq a função que executa o banco de dados está sendo executada aqui no index.js*/
const app = express()

const port = process.env.PORT || 3000

connectDB()
app.use(express.json())
app.use('/user', userRouter)

app.listen(port, () => {
    console.log('Servidor aberto, aguardando Mongo...')
})