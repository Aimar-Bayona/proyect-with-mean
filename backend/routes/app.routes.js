const { Router } = require('express')
const controller = require('../controllers/app.controller')

const router = Router()

router.get('/',controller.get)

module.exports = router