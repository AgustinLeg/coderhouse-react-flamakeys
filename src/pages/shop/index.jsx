import { Button } from 'flowbite-react'

import { ProductCard } from '../../components/product'

const products = [
  {
    id: 1,
    name: 'Producto 1',
    slug: 'producto-1',
    image:
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A deserunt veniam eius nulla maiores eaque perspiciatis obcaecati quis ut harum corporis, ducimus libero vero maxime at sequi reiciendis magni laudantium.',
    price: 5000,
    stock: 10,
    discount: 10,
  },
  {
    id: 2,
    name: 'Producto 2',
    slug: 'producto-2',
    image:
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A deserunt veniam eius nulla maiores eaque perspiciatis obcaecati quis ut harum corporis, ducimus libero vero maxime at sequi reiciendis magni laudantium.',
    price: 15000,
    stock: 5,
  },
  {
    id: 3,
    name: 'Producto 3',
    slug: 'producto-3',
    image:
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A deserunt veniam eius nulla maiores eaque perspiciatis obcaecati quis ut harum corporis, ducimus libero vero maxime at sequi reiciendis magni laudantium.',
    price: 5000,
    stock: 10,
  },
]

export const ShopPage = () => {
  return (
    <section>
      <div className="flex w-full justify-between my-5">
        <h2 className="text-xl font-bold">Todos los productos</h2>
        <Button color="light">Filtros</Button>
      </div>
      <div className="flex gap-5 flex-wrap md:justify-start justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
