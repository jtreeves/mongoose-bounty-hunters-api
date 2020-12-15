const express = require('express')
const app = express()
require('dotenv').config()

const models = require('./models')

app.get('/', (req, res) => {
    res.send('Root page')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})