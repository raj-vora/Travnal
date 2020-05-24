const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    passwordHash: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: String,
    website: String,
    phone: String,
    name: String,
    birthdate: String,
    city: String,
    followers: Array,
    following: Array,
    feeds: Array,
    posts: Array,
    profile: String
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
            // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})

module.exports = mongoose.model('User', userSchema)