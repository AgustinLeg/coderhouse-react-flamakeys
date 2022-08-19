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
        if (!data) {
          setError(true)
          throw new Error('no data')
        }
        setData(data)
      } catch (error) {
        setError(true)
        // setData([])
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [url])

  return { data, error, isLoading }
}
