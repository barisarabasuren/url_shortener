const { findShortUrl, updateVisits } = require("../../models/urls.model");
const urls = require('../../models/urls.model')

const httpHandleShortenedUrl = async(req, res) => {
    const shortened_url = req.params.shortened_url
    const object = await findShortUrl(shortened_url)

    if(object) {
        updateVisits(object.id)
        return res.redirect(`https://${object.url}`)
    }
}

module.exports = httpHandleShortenedUrl