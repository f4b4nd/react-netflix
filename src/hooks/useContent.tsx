import { useState, useEffect } from "react"

import  { firebase } from "../lib/firebase.prod"

export default function useContent (target: string) {
    
    const [content, setContent] = useState<TMovie[]>([])
    
    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }))
                setContent(allContent)
            })
            .catch((error) => {
                console.log(error.message)
            })

    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {[target]: content}
}