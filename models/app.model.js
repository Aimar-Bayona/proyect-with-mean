const mongoose = require('mongoose')

const model = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    created: {
        type: Date,
    	default: Date.now
    }
},{
    versionKey: false
})

module.exports = mongoose.model('admins', model)