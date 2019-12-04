const User = require('../models/user.model')

module.exports = async (request, response, next) => {
    if (!request.body || !request.body.email) return next()

    if (await User.findOne({ email: request.body.email }))
        return response.status(400).json([
            {
                message: 'unique validation failed on email',
                validation: 'unique',
                field: 'email'
            }
        ])

    return next()
}
