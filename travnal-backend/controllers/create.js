const router = require('express').Router();
const User = require('../models/user');

router.post('/', async (request, response) => {
    const body = request.body;
    const username = body.username;
    let user = await User.findOneAndUpdate({ username: username }, body);
    response.send(user);
})

module.exports = router;