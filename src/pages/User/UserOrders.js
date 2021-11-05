import React from "react";
import { Link } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser";

const UserOrders = () => {
  const { orders = []} = useGetUser()
  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="mt-5 pt-5">
        <h2 className="text-center">Mis Compras</h2>
        <div className="container-fluid">
            {orders.length > 0 ? (
              <>
                {orders.map((item) => (
                  <div key={item.id} className="col-md-6 border p-3">
                    <div className="col-12">
                      <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "12px" }}>
                          {item.nombre}
                        </h5>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center">
                    <span
                          className="text-uppercase text-success"
                          style={{ fontSize: "14px" }}
                        >
                          cantidad {item.cantidad}
                        </span>
                      <span
                        className="fw-bold"
                        style={{ fontSize: "12px" }}
                      >
                        $ {item.cantidad * item.precio}
                      </span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="container text-center mt-5">
                <p>Aun no compraste nada :( </p>
                <Link to="/" className="btn btn-dark ">Comprar</Link>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
