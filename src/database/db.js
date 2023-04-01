const mongoose = require('mongoose')

const connectDB = () => {

    console.log('esperando DB')

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