import { useState, useEffect } from 'react'

export default function useFetchAPI (url: string) {

    const [content, setContent] = useState<TResponseAPI>([])

    const fetchResponse = async (url: string) => {

        const response = await fetch(url)

        if (!response.ok) {
            console.log(response.status)
            return
        }

        const JSONresponse = await response.json()
        const data = JSONresponse.results ?? [JSONresponse]
        setContent(data)
        console.log('apimovies', data)

    }

    useEffect(() => {

        fetchResponse(url)
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return content
}
