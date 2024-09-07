import mongoose from 'mongoose'

const connectDB = () => {

    console.log('Aguardando conexão com o banco de dados...')

    mongoose.connect( process.env.MONGODB_URI, /*dotenv serve para proteção de dados sensíveis*/
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => {

            console.log('Banco de dados conectado.')

        }).catch((erro) => {

            console.log('Erro de conexão com o banco de dados.')
        })
}

export default connectDB