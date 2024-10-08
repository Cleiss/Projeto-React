import axios from "axios"

const baseURL = 'http://localhost:3000'

export function getNews() {
    const response = axios.get(`${baseURL}/news`) //async

    return response
}

export function getTopNews() {
    const response = axios.get(`${baseURL}/news/top`)

    return response
}

export function searchNews(title) {
    const response = axios.get(`${baseURL}/news/searchtitle?title=${title}`)

    return response

}