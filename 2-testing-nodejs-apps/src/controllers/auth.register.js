const User = require('../models/user.model')
const Bcrypt = require('bcryptjs')
const { validateAll } = require('indicative/validator')

module.exports = async (request, response) => {
    const { body } = request
    // validate the request body
    await validateAll(body, {
        name: 'required|string|max:40',
        email: 'required|string|email',
        password: 'required|string|min:6|max:40'
    })

    const user = await User.create({
        name: body.name,
        email: body.email,
        password: Bcrypt.hashSync(body.password)
    })

    return response.json(user)
}
