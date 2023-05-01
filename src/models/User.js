import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

/*o schema é um método do mongoose e define como os documentos serão criados no bd*/
const UserSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        senha: {
            type: String,
            required: true,
            select: false
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

/*função pre("save", função a ser executada) = antes de salvar algo, execute a função.
    neste caso, antes de salvar a senha, criptografe-a*/
UserSchema.pre("save", async function (next) {
    this.senha = await bcrypt.hash(this.senha, 10) /* hash() criptografa a senha; 10 = quant. de salt/rodadas*/

    next()
})

const User = mongoose.model("User" /*nome dado ao Schema*/, UserSchema)

export default User