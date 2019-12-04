const Express = require('express')
const Mongoose = require('mongoose')

const app = new Express()

app.use(require('body-parser').json())

const asyncHandler = handler => (request, response) =>
    handler(request, response).catch(error => response.status(400).json(error))

app.post(
    '/auth/register',
    require('./middleware/check-for-duplicate-email'),
    asyncHandler(require('./controllers/auth.register'))
)

app.get('/users', asyncHandler(require('./controllers/users')))

Mongoose.connect(
    process.env.MONGODB_URL || 'mongodb://localhost:27017/testing-nodejs-apps',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).then(() => {
    app.listen(process.env.PORT || 3030, () => {
        console.log('Server running ...')
    })
})
