import { useState, useEffect } from 'react'

export default function useFetchAPI (url: string) {

    const [content, setContent] = useState<Record<string, string>>({})

    const fetchResponse = async (url: string) => {

        const response = await fetch(url)

        if (!response.ok) {
            console.log(response.status)
        }

        const JSONresponse = await response.json()
        setContent(JSONresponse.results)
        console.log('apimovies', JSONresponse.results)

    }

    useEffect(() => {

        fetchResponse(url)
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return content
}
