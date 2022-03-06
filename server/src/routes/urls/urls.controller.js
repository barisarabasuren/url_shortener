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
    const urlObj = await findUrl(req.body)

    if(urlObj) {
        await updateCreationAttempt(urlObj);
        return res.status(200).json(await findUrl(req.body))
    } else {
        await addNewUrl(req.body)
        return res.status(201).json(await findUrl(req.body));
    }
}

module.exports = {
    httpGetAllUrls,
    httpHandleNewUrl
}