const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Bounty.find().then((foundBounties) => {
        res.status(200).json({bounties: foundBounties})
    })
})

router.get('/:id', (req, res) => {
    models.Bounty.find({_id: req.params.id}).then((bounty) => {
        res.status(200).json({bounty})
    })
})

router.post('/', (req, res) => {
    models.Bounty
        .create(req.body)
        .then((bounty) => {
            res.status(201).json({bounty})
        })
        .catch((err) => {res.send(err)})
})

router.put('/:id', (req, res) => {
    res.send('hello from PUT /bounties/:id')
})

router.delete('/:id', (req, res) => {
    res.send('hello from DELETE bounties/:id')
})

module.exports = router