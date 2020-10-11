const routes = require('./routes/reprogramaRoutes')

const express = require('express')
const app = express()

app.use(express.json())
app.use('/', routes)

module.exports = app