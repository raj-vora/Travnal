const router = require('express').Router();
const User = require('../models/user');

router.get('/:username', async (request, response) => {
    const username = request.params.username;
    const user = await User.findOne({ username: username }).populate('followers').populate('following')
    response.send(user.toJSON());
})

router.post('/tripinfo', async(request, response) => {
    const { username, id } = request.body;
    const user = await User.findOne({ username: username });
    const trip = user.posts[id-1];
    console.log(trip);
    response.send({trip, username});
})

module.exports = router