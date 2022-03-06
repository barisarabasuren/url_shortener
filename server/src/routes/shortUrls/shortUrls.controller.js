const { findShortUrl, updateVisits } = require("../../models/urls.model");
const urls = require('../../models/urls.model')

const httpHandleShortenedUrl = async(req, res) => {
    const shortened_url = req.params.shortened_url
    const object = await findShortUrl(shortened_url)

    if(object) {
        console.log('found')
        updateVisits(object.id)
        return res.redirect(`https://${object.url}`)
    } else {
        return res.send('short url not found')
    }
}

module.exports = httpHandleShortenedUrl