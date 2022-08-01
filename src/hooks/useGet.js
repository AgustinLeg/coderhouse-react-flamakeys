import { useEffect, useState } from 'react'

import { shopAPI } from '../services'

export const useGet = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      setIsLoading(true)
      const { data } = shopAPI.get(`/${url}`)
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [url])

  return { data, error, isLoading }
}
