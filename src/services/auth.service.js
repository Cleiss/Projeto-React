import User from '../models/User.js'

const loginService = (email) => {

    return User.findOne({ email: email }).select('+senha')
}


export default loginService