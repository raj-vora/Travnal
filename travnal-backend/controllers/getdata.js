const router = require('express').Router();
const User = require('../models/user');

router.get('/:username', async (request, response) => {
    const username = request.params.username;
    const user = await User.findOne({ username: username }).populate('followers').populate('following');
    response.send(user.toJSON());
});

router.post('/tripinfo', async(request, response) => {
    const { username, id } = request.body;
    const user = await User.findOne({ username: username });
    const trip = user.posts[id-1];
    console.log(trip);
    response.send({trip, username});
});

router.get('/search/:query', async(request, response) => {
    const query = request.params.query;
    let result = {'users': [], 'trips': []};
    const users = await User.find({});
    users.forEach(user => {
        if(user.username.includes(query)){
            result['users'].push(user)
        }
        user.posts.forEach(post => {
            if(post.tripname.toLowerCase().includes(query) || post.description.includes(query)){
                result['trips'].push({username:user.username, post: post})
                console.log(post)
            }
            post.places.forEach(place => {
                if(place.name.includes(query) || place.description.includes(query) || place.location.includes(query)){
                    result['trips'].push({username:user.username, post: post})
                }
            })
        })
    })
    response.send(result);
});

module.exports = router;