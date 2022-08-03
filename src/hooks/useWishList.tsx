import { useEffect, useState } from 'react'

import { getWishListFromLocalStorage } from '../utils/localStorage'

export default function useWishList () {

    const [wishList, setWishList] = useState<TMovie[]>([])

    useEffect(() => {

        const items = getWishListFromLocalStorage()

        setWishList(items)
    
    }, [])

    return wishList

}
