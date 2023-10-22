import User from "../models/User.js"

const create = (body)/*recebe os dados do body*/ => User.create(body) /*create é um método do mongoose que cria um novo item dentro do Schema*/

const findAll = () => User.find().sort({ _id: -1 })

const findIdservice = (id) => User.findById(id)

const updt = (id, nome, username, email, senha, foto, background) => User.findOneAndUpdate({ _id: id }/*encontra pelo id*/, { nome, username, email, senha, foto, background } /*parâmetros que se quer atualizar*/)


export default { create, findAll, findIdservice, updt }