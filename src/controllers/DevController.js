const axios = require('axios')

const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body
        
        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const apiRes = await axios.get(`https://api.github.com/users/${github_username}`)

            let { name = login, avatar_url, bio } = apiRes.data

            if (name == null) {
                name = github_username
            }

            const techsArray = require('./utils/parseStringAsArray')(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }

        return res.json(dev)
    },
    async index(req, res) {
        const devs = await Dev.find()

        return res.json(devs)
    }
}