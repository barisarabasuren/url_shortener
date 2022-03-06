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

const findUrl = async (body) => {
    return await urls.findOne(body)
}

const findShortUrl = async(shortened_url) => {
    return await urls.findOne({shortened_url})
}

const addNewUrl = async (data) => {
    const id = generateString(10)
    const shortened_url = generateString(5)

    await urls.updateOne({
        url: data.url
    },{
        id: id,
        date: new Date(),
        url: data.url,
        shortened_url: shortened_url,
        visits: 0,
        creationAttempt: 1
    }, {
        upsert: true
    }
    ) 
    return (shortened_url)
}

const updateCreationAttempt = async (data) => {
    await urls.updateOne({
        url: data.url
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