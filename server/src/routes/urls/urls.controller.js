const {
    urls,
    getAllUrls,
    addNewUrl,
    findUrl,
    updateCreationAttempt,
} = require('../../models/urls.model')

const httpGetAllUrls = async (req, res) => {
    return res.status(200).json(await getAllUrls())
}

const httpHandleNewUrl = async (req, res) => {
    const body = req.body;

    const urlObj = await findUrl(body)

    if(urlObj) {
        updateCreationAttempt(urlObj);
        return res.status(200).json(urlObj)
    } else {
        return res.status(201).json(await addNewUrl(body));
    }
}

module.exports = {
    httpGetAllUrls,
    httpHandleNewUrl
}