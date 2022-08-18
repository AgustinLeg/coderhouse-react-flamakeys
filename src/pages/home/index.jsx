import { Button } from 'flowbite-react'

import { ProductCard } from '@/components/product'

import { useGet } from '../../hooks/useGet'

export const HomePage = () => {
  const { data, isLoading, error } = useGet('products')

  return (
    <section className="mt-16">
      <div className="flex w-full justify-between my-5">
        <h2 className="text-xl font-bold">Todos los productos</h2>
        <Button color="light">Filtros</Button>
      </div>
      <div className="flex gap-5 flex-wrap md:justify-start justify-center">
        {isLoading && <p>cargando...</p>}
        {!isLoading &&
          !error &&
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {!isLoading && error && <p>Error al obtener los productos</p>}
      </div>
    </section>
  )
}
