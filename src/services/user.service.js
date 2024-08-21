import User from "../models/User.js"

const createUserService = (body)/*recebe os dados do body*/ => User.create(body) /*create é um método do mongoose que cria um novo item dentro do Schema*/

const findAllUsersService = () => User.find().sort({ _id: -1 })

const findUserIdService = (id) => User.findById(id)

const findUserEmailService = (email) => User.findOne(email)

const updtUserService = (id, nome, username, email, senha, foto, background) => User.findOneAndUpdate({ _id: id }/*encontra pelo id*/, { nome, username, email, senha, foto, background } /*parâmetros que se quer atualizar*/)


export default { createUserService, findAllUsersService, findUserIdService, findUserEmailService, updtUserService }