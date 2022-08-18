import axios from 'axios'
import Cookies from 'js-cookie'

const { VITE_APP_API } = import.meta.env

export const shopAPI = axios.create({
  baseURL: VITE_APP_API,
  headers: { Authorization: `Bearer ${Cookies.get('token')}` },
})
