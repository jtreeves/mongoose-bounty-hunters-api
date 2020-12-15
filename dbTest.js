require('dotenv').config()

const models = require('./models')

console.log(models)

models.Bounty.create({
    name: 'Yosemite Sam',
    wantedFor: 'Rootin & tootin',
    client: 'Walt Disney',
    reward: 1000,
    ship: 'Goodship Lollypop',
    hunters: ['Bugs Bunny', 'Donald Duck'],
    captured: false,
    lastSeen: '1984'
})

models.Bounty.deleteMany().then(() => {
    console.log('done!')
})