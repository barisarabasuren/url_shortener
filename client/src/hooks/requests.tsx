//TODO: change API_URL to http://localhost:8000 in development env.
const API_URL = 'https://whispering-mesa-59217.herokuapp.com'


const httpGetAllUrls =  async () => {
    const response = await fetch(`${API_URL}/urls`);
    return await response.json()
}


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