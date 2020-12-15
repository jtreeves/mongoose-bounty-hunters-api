const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('hello from GET /bounties')
})

router.get('/:id', (req, res) => {
    res.send('hello from GET /bounties/:id')
})

router.post('/', (req, res) => {
    res.send('hellow from POST /bounties')
})

router.put('/:id', (req, res) => {
    res.send('hello from PUT /bounties/:id')
})

router.delete('/:id', (req, res) => {
    res.send('hello from DELETE bounties/:id')
})

module.exports = router