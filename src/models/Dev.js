const mongoose = require('mongoose')

const PointScheema = require('./utils/PointSheema')

const DevScheema = new mongoose.Schema({
    github_username: String,
    name: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointScheema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('Dev', DevScheema)