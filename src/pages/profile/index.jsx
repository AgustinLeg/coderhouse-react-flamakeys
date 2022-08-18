import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from 'flowbite-react'

import { useGet } from '../../hooks'
import { hourMonth } from '../../utils'

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth)
  const { data, isLoading } = useGet('order')

  return (
    <div className="max-w-lg m-auto mt-20">
      <Card>
        <div className="mb-4 flex flex-col gap-5">
          <h4 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">{`${user.name} ${user.lastName}`}</h4>
          <h5 className="text-xl leading-none text-slate-500 dark:text-white">
            {user.email}
          </h5>
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Mis Compras
          </h5>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!isLoading &&
              data &&
              data.map(
                ({ _id, createdAt, numberOfItems, total, shippingAddress }) => (
                  <li
                    className="py-3 sm:py-4 bg-gray-100 p-4 my-5 cursor-pointer"
                    key={_id}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {hourMonth(createdAt)} x {numberOfItems} items
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {`${shippingAddress.name} ${shippingAddress.lastName}`}
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {shippingAddress?.email}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $ {total}
                      </div>
                    </div>
                  </li>
                )
              )}
            {!isLoading && !data.length && (
              <li className="h-16  w-full flex items-center justify-center">
                <Link to="/">Comprar</Link>
              </li>
            )}
          </ul>
        </div>
      </Card>
    </div>
  )
}
