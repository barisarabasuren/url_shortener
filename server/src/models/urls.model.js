const urls = require('./urls.mongo')

const generateString = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(
            Math.floor(
                Math.random() * charactersLength
                )
        );
    }
    return result;
}

const getAllUrls = async () => {
    return urls.find({})
}

const findUrl = async (url) => {
    return await urls.findOne(url)
}

const findShortUrl = async(shortened_url) => {
    return await urls.findOne({shortened_url})
}

const addNewUrl = async (body) => {
    const id = generateString(10)
    const shortened_url = generateString(5)

    await urls.updateOne(
        {
        url: body.url
        },{
            id: id,
            date: new Date(),
            url: body.url,
            shortened_url: shortened_url,
            visits: 0,
            creationAttempt: 1
        }, {
            upsert: true
        }
    )
}

const updateCreationAttempt = async (data) => {
    await urls.updateOne({
        id: data.id
    },{
        $inc: {
            creationAttempt: 1
        }
    }) 
}

const updateVisits = async (id) => {
    await urls.updateOne({
        id: id
    },{
        $inc: {
            visits: 1
        }
    }) 
}

module.exports = {
    urls,
    getAllUrls,
    findUrl,
    findShortUrl,
    addNewUrl,
    updateCreationAttempt,
    updateVisits
}