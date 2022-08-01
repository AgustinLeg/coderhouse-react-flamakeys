import axios from 'axios'

const { VITE_APP_API } = import.meta.env

export const shopAPI = axios.create({
  baseURL: VITE_APP_API,
  headers: { 'X-Custom-Header': 'foobar' },
})
