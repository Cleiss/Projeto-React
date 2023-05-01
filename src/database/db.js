import mongoose from 'mongoose'

const connectDB = () => {

    console.log('aguardando conexão com Mongo...')

    mongoose.connect( process.env.MONGODB_URI, /*dotenv serve para proteção de dados sensíveis*/
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => {

            console.log('Mongo conectado')

        }).catch((erro) => {

            console.log('erro de conexão com o Mongo')
        })
}

export default connectDB