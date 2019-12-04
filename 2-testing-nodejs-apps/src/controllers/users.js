const User = require('../models/user.model')

module.exports = async (request, response) => {
    const users = await User.find({})

    return response.json(users)
}
