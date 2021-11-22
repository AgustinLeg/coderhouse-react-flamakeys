import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useUserContext } from "../../context/userContext";

import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Stateless/Loader/Loader";

const UserOrders = () => {
  const { orders } = useUserContext();
  const [templatedata, setTemplatedata] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (items) => {
    setShowModal(true);
    setTemplatedata(items);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      {orders ? (
        <>
          {orders?.length > 0 ? (
            <>
              <div className="container flex flex-col items-center">
                <Link to="/mi-cuenta" className="text-base font-bold text-red-600">
                  Mi Cuenta
                </Link>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl my-6 text-center font-heading text-gray-900">
                  Ultimos pedidos
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="w-full bg-gray-100 text-gray-700 rounded-lg p-12 flex flex-col justify-center items-center"
                  >
                    <div className="mb-8">
                      <p className="font-bold">
                        Pedido:{" "}
                        <span className="font-normal text-black">
                          {order.id}
                        </span>
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold mb-2">
                        Total: $ {order.total}
                      </p>
                      <p className="text-base font-normal">Fecha: {order.fecha}</p>
                    </div>
                    <button
                      onClick={() => handleClick(order.items)}
                      className="bg-gray-700 hover:bg-gray-800 my-5 text-white font-bold py-2 px-4 border-b-4 border-gray-900 hover:border-blue rounded"
                    >
                      Mas Informacion
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex w-ful items-center justify-center">
              <div className="p-12 text-center max-w-2xl">
                <p className="md:text-3xl text-3xl font-bold">
                  No encontramos ningun pedido
                </p>
                <p className="text-xl font-normal mt-4">
                  Puedes empezar comprando algun producto haciendo click aqui.
                </p>
                <div className="mt-6 flex justify-center h-12 relative">
                  <Link
                    to="/"
                    className="flex shadow-md font-medium absolute py-2 px-4 text-gray-100
                  cursor-pointer bg-gray-600 rounded text-lg tr-mt  svelte-jqwywd "
                  >
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          )}{" "}
        </>
      ) : (
        <Loader />
      )}

      <Modal
        titulo="Detalle del pedido"
        showModal={showModal}
        closeModal={closeModal}
      >
        <>
          {templatedata.map((item) => (
            <div key={item.id} className="flex justify-between mt-2">
              <div className="flex">
                <img
                  className="h-20 w-20 object-cover rounded"
                  src={item.imgURL}
                  alt={`Foto producto de ${item.nombre}`}
                />
                <div className="px-3">
                  <h3 className="text-sm text-gray-600">{item.nombre}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-700 mx-2 text-sm">
                      Cantidad: {item.cantidad}
                    </span>
                  </div>
                </div>
              </div>
              <p className="w-24">$ {item.precio}</p>
            </div>
          ))}
        </>
      </Modal>
    </section>
  );
};

export default UserOrders;
