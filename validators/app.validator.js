const { check } = require('express-validator')
const { validateResult } = require('../helpers/app.helper')
const validateCreate = [
    check('name')
    .exists()
    .isLength({min:3})
    .not()
    .isEmpty()
    .not()
    .isNumeric(),
    (req, res, next) =>{
        validateResult(req, res, next)
    }
]


module.exports = { validateCreate }