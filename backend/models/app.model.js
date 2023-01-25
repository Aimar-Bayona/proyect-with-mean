const mongoose = require('mongoose')

const model = new mongoose.Schema({
    name: String,
    lastName: String,
    user: String,
    password: String,
    email: String
})

module.exports = mongoose.model('admins', model)