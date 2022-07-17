import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: import.meta.env.VITE_DEBUG_MODE ? {
        ts: import.meta.env.VITE_TIMESTAMP,
        apikey: import.meta.env.VITE_API_KEY,
        hash: import.meta.env.VITE_HASH_MD5,
        
    } : {}
})


