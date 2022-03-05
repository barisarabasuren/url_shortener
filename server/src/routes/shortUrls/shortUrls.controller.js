const { getFromShortUrl, updateVisits } = require("../../models/url.model");
const urls = require('../../models/url.model')

const httpHandleShortenedUrl = (req, res) => {
    const shortened_url = req.params.shortened_url
    const object = getFromShortUrl(shortened_url)

    if(object) {
        updateVisits(object)
        return res.redirect(`https://${object.url}`)
    } else {
        return res.send('short url not found')
    }
}

module.exports = httpHandleShortenedUrl