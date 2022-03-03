const urls = require('../../models/url.model')

const getAllUrls = (req, res) => {
    return res.status(200).json(urls)
}

module.exports = {
    getAllUrls
}