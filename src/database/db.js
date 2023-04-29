const mongoose = require('mongoose')

const connectDB = () => {

    console.log('aguardando conexão com Mongo...')

    mongoose.connect(
        "mongodb+srv://cleis:cleiton31@cluster0.oezan0z.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => {

            console.log('Mongo conectado')

        }).catch((erro) => {

            console.log('erro de conexão com o Mongo')
        })
}

module.exports = connectDB