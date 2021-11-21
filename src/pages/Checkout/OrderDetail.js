import React from "react";
import LinkButton from "../../components/Stateless/Buttons/LinkButton";
import { useCartContext } from "../../context/cartContext";
import useFormatPrice from "../../hooks/useFormatPrice";

const OrderDetail = () => {
  const { order } = useCartContext();
  console.log(order)
  let items = [];
  let total;
  if (order) {
    items = order.order.items;
    total= order.order.total
  }
  total = useFormatPrice(total)
  return (
    <section className="pt-20 pb-20">
      {order ? (
        <>
          {" "}
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold  text-gray-700">
                Detalles de la Compra
              </h2>
              <p className="text-lg leading-relaxed m-4 text-gray-500">
                Identificador del pedido: <span className="font-bold text-black">{order.id}</span>
              </p>
              <p className="text-lg leading-relaxed m-4 text-gray-500">
                Felicidades tu compra fue procesada con exito, aca puedes ver
                los detalles de la misma.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            {items.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8"
              >
                <div className="px-6">
                  <img
                    alt={`Foto producto ${item.nombre}`}
                    src={item.imgURL}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-gray-700 h-44">
                      {item.nombre}
                    </h5>
                    <p className="mt-1 text-lg text-gray-400 uppercase font-semibold">
                      $ {item.precio}
                    </p>
                    <div className="mt-6">
                      <span className="text-lg leading-relaxed m-4 text-gray-500">cantidad: {item.cantidad} </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full flex flex-col items-center pt-4">
              <h3 className="text-2xl font-semibold  text-gray-700">Total</h3>
              <p className="text-2xl leading-relaxed m-4 text-gray-500">{total}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col items-center justify-center px-4">
          <h2 className="text-4xl font-semibold  text-gray-700">
            No encontramos tu compra
          </h2>
          <p className="text-lg leading-relaxed m-4 text-gray-500">
            Haz click aqui para volver
          </p>
          <LinkButton path="/" text="volver"></LinkButton>
        </div>
      )}
    </section>
  );
};

export default OrderDetail;
