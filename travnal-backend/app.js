const config = require('./utils/config')
const express = require('express')
require('express-async-errors');
const app = express()
const cors = require('cors')
const users = require('./controllers/users')
const login = require('./controllers/login')
const upload = require('./controllers/upload')
const create = require('./controllers/create')
const User = require('./models/user')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

main = async() => {
    await mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    logger.info('connected to MongoDB')
}

main()
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/users', users)
app.use('/api/login', login)
app.use('/api/upload', upload)
app.use('/api/create', create)
app.get('/api/:username', async (request, response) => {
    const username = request.params.username;
    const user = await User.findOne({ username: username })
    response.send(user.toJSON());
})


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app