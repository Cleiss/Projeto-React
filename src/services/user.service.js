const User = require ("../models/User")

const create = (body)/*recebe os dados do body*/ => User.create(body) /*create é um método do mongoose que cria um novo item dentro do Schema*/

module.exports = {create}