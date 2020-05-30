const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

usersRouter.post('/', async(request, response, next) => {
    const { username, email, password, cpassword} = request.body

    if (password === undefined || password.length < 8) {
        return response.status(400).json({ error: 'password is not in required format.' })
    }

    if(password !== cpassword) {
        return response.status(400).json({ error: 'passwords don\'t match.' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username: username,
        email: email,
        passwordHash,
    })

    const savedUser = await user.save()
    
    const userForToken = {
        username: savedUser.username,
        id: savedUser._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    response.status(200).send({ token, username: user.username, name: user.name })
})

usersRouter.get('/', async(request, response) => {
    const users = await User.find({}).populate('followers').populate('following');
    response.json(users.map(user => user.toJSON()))
})

module.exports = usersRouter