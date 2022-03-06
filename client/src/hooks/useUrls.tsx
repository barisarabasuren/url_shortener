import { useCallback, useEffect, useState } from "react"
import { httpGetAllUrls } from "./requests"

interface urlInterface {
    id: string,
    date: string,
    url: string,
    shortened_url: string,
    visits: number,
    creationAttempt: number
}
const useUrls = () => {
    const [urls, setUrls] = useState<undefined | [urlInterface]>(undefined)

    const getUrls = useCallback(async () => {
        const fetchedUrls = await httpGetAllUrls();
        setUrls(fetchedUrls)
    }, []) 

    useEffect(() => {
        getUrls()
    })

    return urls
}

export default useUrls