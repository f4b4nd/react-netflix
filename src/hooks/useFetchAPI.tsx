import { useState, useEffect } from 'react'

export default function useFetchAPI (url: string) {

    const [content, setContent] = useState<TMovieAPI[]>([])

    const fetchResponse = async (url: string) => {

        try {

            const response = await fetch(url)

            if (!response.ok) {
                console.log(response.status)
                return
            }
    
            const JSONresponse: TResponseAPI = await response.json()
            const data: TMovieAPI[] = 'results' in JSONresponse ? JSONresponse.results : [JSONresponse]
            setContent(data)
            console.log('apimovies', data)

        }

        catch (error) {
            console.log('catch error', error)
        }

    }

    useEffect(() => {

        fetchResponse(url)
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return content
}
