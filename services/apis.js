import axios from 'axios';
import urlJoin from 'url-join'

export const apiAuth = {
    url: process.env.NEXT_PUBLIC_AUTH_URL,
    get: (path = '/', config = {}, ctx = null) => {
        return axios.get(urlJoin(apiAuth.url, path), config)
    },
    post: (path = '/', data = {}, config = {},  ctx = null) => {
        return axios.post(urlJoin(apiAuth.url, path), data, config)
    }
}