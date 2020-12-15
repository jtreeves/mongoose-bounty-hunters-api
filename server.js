const express = require('express')
const app = express()
const env = require('dotenv')

app.get('/', (req, res) => {
    res.send('hello from root')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})