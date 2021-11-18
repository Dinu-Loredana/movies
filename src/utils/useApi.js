import {useEffect, useState} from "react";

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/"

const request = async ({path}) => {
    const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
    }
    return axios.request({
        headers,
        url: `${BASE_URL}${path}`
    })
}

const useApi = ({path, params}) => {
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        request({path})
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })

    }, [path, params])

    return {data, error, loading}
}

export default useApi
