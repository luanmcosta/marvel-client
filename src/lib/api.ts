import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    params: process.env.REACT_APP_DEBUG_MODE ? {
        ts: process.env.REACT_APP_TIMESTAMP,
        apikey: process.env.REACT_APP_API_KEY,
        hash: process.env.REACT_APP_HASH_MD5,
    } : {}
})


