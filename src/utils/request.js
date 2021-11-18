import axios from "axios";

const request = async ({url}) => {
    const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
    }
    return axios.request({
        headers,
        url
    })
}

export default request



