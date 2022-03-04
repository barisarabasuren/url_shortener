const {
    urls,
    getAllUrls,
    addNewUrl,
    doesUrlExist,
    updateUrl,
} = require('../../models/url.model')

const httpGetAllUrls = (req, res) => {
    return res.status(200).json(getAllUrls())
}

const httphandleNewUrl = (req, res) => {
    const url = req.body;

    const urlIndex = doesUrlExist(url.url)

    if(urlIndex) {
        updateUrl(urlIndex);
        console.log('update')
        return res.status(200).json(url)
    } else {
        addNewUrl(url);
        console.log('add new')
        return res.status(201).json(url);
    }
}

module.exports = {
    httpGetAllUrls,
    httphandleNewUrl
}