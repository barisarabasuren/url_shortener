const urls = [
    {
        id: 1,
        date: 'Mar 3',
        url: 'url1',
        shortened_url: 'shorturl1',
        visits: 0,
        creationAttempt: 1
    },
    {
        id: 2,
        date: 'Mar 3',
        url: 'url2',
        shortened_url: 'shorturl2',
        visits: 5,
        creationAttempt: 1
    },
    {
        id: 3,
        date: 'Mar 3',
        url: 'url3',
        shortened_url: 'shorturl3',
        visits: 3,
        creationAttempt: 1
    }
]

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

const addNewUrl = (data) => {
    const lastId = urls[urls.length - 1].id;

    urls.push({
        id:lastId + 1,
        date: new Date(),
        url: data.url,
        shortened_url: 'shorturl3',
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

    return urls[i]
}

module.exports = {
    urls,
    getAllUrls,
    doesUrlExist,
    addNewUrl,
    updateUrl
}