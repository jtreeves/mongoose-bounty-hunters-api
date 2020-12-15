mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    name: String,
    wantedFor: String,
    client: String,
    reward: Number,
    ship: String,
    hunters: [String],
    captured: Boolean,
    lastSeen: String
})