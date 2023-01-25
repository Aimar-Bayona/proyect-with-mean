const express = require('express')
const morgan = require('morgan')
const router = require('../routes/app.routes')

const app = express()

//settings
app.set('port', process.env.port || 3000)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//middlewares
app.use(morgan('dev'))

//routes
app.use(router)

//port
app.listen(3000)
