const User = require ("../models/User")

const create = (body)/*recebe os dados do body*/ => User.create(body) /*create é um método do mongoose que cria um novo item dentro do Schema*/

const findAll = () => User.find()

const findIdservice = (id) => User.findById(id)

const updt = (id, nome, username, email, senha, foto, background) => User.findOneAndUpdate({_id: id}, {nome, username, email, senha, foto, background})

module.exports = {create, findAll, findIdservice, updt}