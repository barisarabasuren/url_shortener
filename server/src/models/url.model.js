const urls = [
    {
        id: '1',
        date: 'Mar 3',
        url: 'www.facebook.com',
        shortened_url: 'short1',
        visits: 0,
        creationAttempt: 1
    },
    {
        id: '2',
        date: 'Mar 3',
        url: 'www.amazon.com',
        shortened_url: 'short2',
        visits: 5,
        creationAttempt: 1
    },
    {
        id: '3',
        date: 'Mar 3',
        url: 'app.code.berlin',
        shortened_url: 'short3',
        visits: 3,
        creationAttempt: 1
    }
]

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

const getAllUrls = () => {
    return urls
}

const doesUrlExist = (url) => {
    for (let i = 0; i < urls.length; i++) {
        if(urls[i].url == url ) {
            return i
        };
    }

    return false;
}

const getFromShortUrl = (shortened_url) => {
    for (let i = 0; i < urls.length; i++) {
        if(urls[i].shortened_url == shortened_url ) {
            return urls[i]
        };
    }

    return false;
}

const addNewUrl = (data) => {
    urls.push({
        id: generateString(10),
        date: new Date(),
        url: data.url,
        shortened_url: generateString(5),
        visits: 0,
        creationAttempt: 1
    }) 
}

const updateUrl = (i) => {
    urls[i] = {
        id:urls[i].id,
        date: urls[i].date,
        url: urls[i].url,
        shortened_url: urls[i].shortened_url,
        visits: urls[i].visits,
        creationAttempt: urls[i].creationAttempt + 1
    }
}

module.exports = {
    urls,
    getAllUrls,
    doesUrlExist,
    getFromShortUrl,
    addNewUrl,
    updateUrl
}