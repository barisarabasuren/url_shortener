const {
    urls,
    getAllUrls,
    addNewUrl,
    doesUrlExist,
    updateCreationAttempt,
} = require('../../models/url.model')

const httpGetAllUrls = (req, res) => {
    return res.status(200).json(getAllUrls())
}

const httpHandleNewUrl = (req, res) => {
    const body = req.body;

    const urlIndex = doesUrlExist(body)

    if(urlIndex || urlIndex === 0) {
        updateCreationAttempt(urlIndex);
        return res.status(200).json(body)
    } else {
        addNewUrl(body);
        return res.status(201).json(body);
    }
}

module.exports = {
    httpGetAllUrls,
    httpHandleNewUrl
}