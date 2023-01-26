const controller = {};
const model = require("../models/app.model");
const connection = require("../../db/connections/mongo.connection");

connection();

//gets
controller.get = async (req, res) => {
  simplify(req, res, await model.find());
};

controller.getById = async (req, res) => {
  simplify(req, res, await model.findById({ _id: req.params.id }));
};

controller.getByName = async (req, res) => {
  simplify(req, res, await model.findOne({ name: req.params.name }));
};

controller.getByNameEquals = async (req, res) => {
  simplify(req, res, await model.find({ name: req.params.name }));
};

//posts
controller.post = async (req, res) => {
    simplify(req, res, await model.create(req.body))
}

//puts
controller.putReplaceByName = async (req, res) => {
    simplify(req, res, await model.findOneAndReplace({name: req.params.name},req.body))
}

controller.putUpdateByName = async (req, res) => {
    simplify(req, res, await model.findOneAndUpdate({name: req.params.name},req.body))
}

controller.putReplaceById = async (req, res) => {
    simplify(req, res, await model.findOneAndReplace({_id: req.params.id},req.body))
}

controller.putUpdateById = async (req, res) => {
    simplify(req, res, await model.findByIdAndUpdate({_id: req.params.id},req.body))
}

//delete
controller.deleteById = async (req, res) => {
    simplify(req, res, await model.findByIdAndDelete({_id: req.params.id}))
}

controller.deleteByName = async (req, res) => {
    simplify(req, res, await model.findOneAndDelete({name: req.params.name}))
}

controller.deleteByNameEquals = async (req, res) => {
    simplify(req, res, await model.deleteMany({name: req.params.name}))
}

controller.deleteAll = async (req, res) => {
    simplify(req, res, await model.deleteMany({}))
}

//functions
async function simplify(req, res, query) {
  try {
    if (!query) return res.status(403).send("Not found, Query is null");
    res.send(query);
  } catch (err) {
    console.error(err);
  }
}

module.exports = controller;
