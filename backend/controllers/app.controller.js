const controller = {}
const model = require('../models/app.model')
const connection = require('../../db/connections/mongo.connection')
connection()
controller.get = async (req, res)=>{
    try {
        const query = await model.find()
        if (!query) return res.status(404).json({"Not found":"Query is null"})
        res.send(query)
    } catch (err) {
        console.error(err);
    }
}

module.exports = controller