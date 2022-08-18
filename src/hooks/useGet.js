import { useEffect, useState } from 'react'

import { shopAPI } from '../services'

export const useGet = (url) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const { data } = await shopAPI.get(`/${url}`)
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [url])

  return { data, error, isLoading }
}
