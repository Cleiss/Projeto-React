const mongoose = require ('mongoose')

/*o schema é um método do mongoose e define como os documentos serão criados no bd*/
const UserSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        senha: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        },
        background: {
            type: String,
            required: true

            /*required é a verificação dos dados no bd*/
        }
    }
)

const User = mongoose.model ("User" /*nome dado ao Schema*/, UserSchema)

module.exports = User