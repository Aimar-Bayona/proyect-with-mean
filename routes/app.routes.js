const { Router } = require('express')
const controller = require('../controllers/app.controller')
const { validateCreate } = require('../validators/app.validator')

const router = Router()

//requests
//get
router.get('/',controller.get)
router.get('/get/id/:id',controller.getById)
router.get('/get/name/:name',controller.getByName)
router.get('/get/names/:name',controller.getByNameEquals)

//post
router.post('/post', validateCreate, controller.post)

//put
router.put('/put/replace/id/:id',controller.putReplaceById)
router.put('/put/update/id/:id',controller.putUpdateById)
router.put('/put/replace/name/:name',controller.putReplaceByName)
router.put('/put/update/name/:name',controller.putUpdateByName)

//delete
router.delete('/delete/id/:id',controller.deleteById)
router.delete('/delete/name/:name',controller.deleteByName)
router.delete('/delete/names/:name',controller.deleteByNameEquals)
router.delete('/delete/all',controller.deleteAll)

module.exports = router