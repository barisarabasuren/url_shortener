//TODO: get previous URLs
const httpGetAllUrls = () => {
    const data = [
        {
            date: 'Mar 3',
            url: 'url1',
            shortened_url: 'shorturl1',
            visits: '0'
        },
        {
            date: 'Mar 3',
            url: 'url2',
            shortened_url: 'shorturl2',
            visits: '3'
        },
        {
            date: 'Mar 3',
            url: 'url3',
            shortened_url: 'shorturl3',
            visits: '5'
        }
    ];

    return data
}

//TODO: post new URL
const httpPostNewUrl = () => {
    console.log('posting URL')
}

export {
    httpGetAllUrls,
    httpPostNewUrl
}