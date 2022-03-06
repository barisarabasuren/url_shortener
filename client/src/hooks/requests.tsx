const API_URL = 'http://localhost:8000'

//TODO: get previous URLs
const httpGetAllUrls =  async () => {
    const response = await fetch(`${API_URL}/urls`);
    return await response.json()
}

//TODO: post new URL
const httpPostNewUrl = async (url: any) => {
    return await fetch(`${API_URL}/urls`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(url)
    });
}

export {
    httpGetAllUrls,
    httpPostNewUrl
}