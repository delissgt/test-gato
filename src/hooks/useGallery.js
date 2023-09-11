import { useState, useCallback, useEffect } from 'react';
import { getApi } from '../library/helpers/ApiActions';

export function useGallery() {
    const [data, setData] = useState([])
    const [waiting, setWaiting] = useState(true)
    const [, setError] = useState(null)

    const getImages = useCallback(async () => {
        const url = 'images/search?limit=15'
        try {
            const response = await getApi(url, '')
            const data = response.data
            setData(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setWaiting(false)
        }
    }, [])

    useEffect(() => { getImages() }, [getImages])

    return { data, waiting }
}

