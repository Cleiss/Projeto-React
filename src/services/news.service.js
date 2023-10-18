import News from '../models/News.js'

const createService = (body) => News.create(body)

const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate('user')
/*
 _id = -1: ordena desde o último id criado até o primeiro da lista; inverte a ordem.
skip = de quanto em quanto será o intervalo. começa do offset e vai somando a partir do limit.
populate = traz informações do argumento que for utilizado. neste caso é 'user'.
*/

const countNews = () => News.countDocuments()
/* conta quantos documentos há na collection no BD */

export default { createService, findAllService, countNews }