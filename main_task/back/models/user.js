const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    JWTToken: { type: String },
    propositions: [{
        performerID: { type: String, default: null },
        title: { type: String, required: true },
        description: { type: String, required: true },
        creationDate: { type: String, required: true },
        expiringDate: { type: String },
        city: { type: String, required: true },
        status: { type: String, enum: ['waiting', 'accepted', 'done', 'failed'], default: 'waiting' },
        category: [{
            type: String, enum: ['military', 'clothes', 'animals', 'vehicles', 'food', 'children', 'real_estate', 'enternainment', 'health', 'other']
        }]
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User