const Bcrypt = require('bcrypt')

const {
    promisify
} = require('util')

const hashAsync = promisify(Bcrypt.hash)
const compareAsync = promisify(Bcrypt.compare)
//const SALT = 3
const SALT = parseInt(process.env.SALT_PWD)

module.exports = class PasswordHelper {
    
    static hashPassword(pass) {
        return hashAsync(pass, SALT)
    }

    static comparePassword(pass, hash) {
        return compareAsync(pass, hash)
    }

}