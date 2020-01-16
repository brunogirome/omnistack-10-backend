const Dev = require('../models/Dev')

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = require('./utils/parseStringAsArray')(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    }
                },
                $maxDistance: 10000
            }
        })

        res.json({ devs })
    }
}