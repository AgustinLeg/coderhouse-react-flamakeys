import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/Cart/CartItem";
import { useCartContext } from "../../context/cartContext";
import useFormatPrice from "../../hooks/useFormatPrice";

const Cart = () => {
  const { items, total, cantidad, removeItem } = useCartContext();
  // const [inputDisscount, setInputDisscount] = useState("");

  // const handleChange = (e) => {
  //   setInputDisscount(e.target.value);
  // };

  return (
    <div className="container mx-auto">
      <Link
        to="/productos"
        className="flex font-semibold text-red-600 text-sm mt-10 ml-5"
      >
        <svg className="fill-current mr-2 text-red-600 w-4" viewBox="0 0 448 512">
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Seguir Comprando
      </Link>
      <div className="flex flex-col lg:flex-row shadow-md my-10">
        <div className="w-full lg:w-3/4 bg-white p-5 md:p-10">
          <div className="flex justify-between border-b pb-8 items-center">
            <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
            <h2 className="font-semibold lg:text-2xl text-gray-600">
              {cantidad} Productos
            </h2>
          </div>
          {items.length > 0 ? (
            <table className="mt-10 mb-5">
              <thead>
                <tr>
                  <th className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Detalle del producto
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Cantidad
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Precio
                  </th>
                  <th className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} removeItem={removeItem} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col my-10">
              <p className="text-center">El carrito de compras está vacío.</p>
              <button
                type="button"
                className="mt-5"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offCanvasCart"
                aria-label="Close"
              >
                <Link to="/" className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase ">
                  Quiero Comprar
                </Link>
              </button>
            </div>
          )}
        </div>
        <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Detalle de la Compra
          </h1>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Codigo de descuento
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Ingresa tu codigo"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Aplicar
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total</span>
              <span>{useFormatPrice(total)}</span>
            </div>
            <button className="bg-gray-900 font-semibold hover:bg-gray-800  text-sm text-white uppercase w-full" type="button">
              <Link to="/finalizar-compra" className="w-100 py-3 block">
                Finalizar Compra
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
