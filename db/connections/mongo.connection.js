const mongoose = require('mongoose')
const uri = require('../keys/mongo.key')
mongoose.set('strictQuery', false)

module.exports = ()=> mongoose.connect(uri)