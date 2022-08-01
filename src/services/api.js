import axios from 'axios'

const { API_URL } = process.env

export const shopAPI = axios.create({
  baseURL: API_URL,
  headers: { 'X-Custom-Header': 'foobar' },
})
