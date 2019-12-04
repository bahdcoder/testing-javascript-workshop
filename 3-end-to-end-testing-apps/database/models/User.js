const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your username']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide your email.']
    },
    password: {
        type: String,
        required: [true, 'Please provide your password.']
    }
})

UserSchema.pre('save', function(next) {
    const user = this

    const encrypted = bcrypt.hashSync(user.password)

    user.password = encrypted

    next()
})

module.exports = mongoose.model('User', UserSchema)
