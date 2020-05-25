const router = require('express').Router();
const User = require('../models/user');

router.post('/', async (request, response) => {
    const body = request.body;
    const username = body.username;
    let user = await User.findOneAndUpdate({ username: username }, body);
    response.send(user);
})

router.post('/trip', async (request, response) => {
    const {tripname, date, description, username} = request.body;
    let user = await User.findOne({ username: username })
    const tripId = user.posts.length+1
    const trip = {
        tripname,
        tripId,
        date, 
        description
    }
    user.posts.push(trip)
    await user.save();
    console.log(user);    
    response.send(user);
})

router.post('/place', async (request, response) => {
    const { username, name, description, location, id} = request.body;
    var date=new Date()
    let user = await User.findOne({ username: username })
    user.posts[id-1].places.push({
        name,
        description,
        location,
        date: date.toString()
    })
    await user.save()
    console.log(user.posts[id-1])
    response.send({testing: "testing"})
})

module.exports = router;