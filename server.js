const express = require('express')
const app = express()
require('dotenv').config()

// Let it grab body data
app.use(express.urlencoded())
// Parse body data as JSON
app.use(express.json())

const models = require('./models')

app.get('/', (req, res) => {
    res.send('Root page')
})

app.use('/bounties', require('./controllers/bountiesControllers'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})