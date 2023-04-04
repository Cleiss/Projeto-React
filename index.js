const express = require ('express')
const userRouter = require ('./src/routes/user.route')
const app = express()
const connectDB = require ('./src/database/db')

connectDB()
app.use(express.json())
app.use ('/user', userRouter)

app.listen(3000, () => {
    console.log('Servidor aberto, aguardando Mongo...')
})