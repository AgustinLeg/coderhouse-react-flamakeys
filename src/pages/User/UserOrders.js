import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useUserContext } from "../../context/userContext";

import Modal from "../../components/Modal/Modal";

const UserOrders = () => {
  const { orders} = useUserContext();
  const [modal, setModal] = useState(false);
  const [templatedata, setTemplatedata] = useState([]);

  const handleClick = (items) => {
    setModal(true);
    setTemplatedata(items);
  };

  const closeModal = () => setModal(false);

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="mt-5 pt-5">
        <h2 className="text-center">Mis Compras</h2>
        <div className="container">
          <div className="row">
            {orders.length > 0 ? (
              <>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className=" col-md-5 card text-white bg-dark m-3"
                  >
                    <div className="card-header">Pedido: <span className='fw-bold'>{order.id}</span></div>
                    <div className="card-body">
                      <h5 className="card-title">Total: $ {order.total} </h5>
                      <p className="card-text">Fecha: {order.fecha}</p>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleClick(order.items)}
                      >
                        Mas Informacion
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="container text-center mt-5">
                <p>Aun no compraste nada :( </p>
                <Link to="/" className="btn btn-dark ">
                  Comprar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {modal && <Modal items={templatedata} closeModal={closeModal} />}
    </div>
  );
};

export default UserOrders;
