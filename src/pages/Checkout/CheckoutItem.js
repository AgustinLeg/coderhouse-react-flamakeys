import React from "react";
import useFormatPrice from "../../hooks/useFormatPrice";

const CheckoutItem = ({ item }) => {
  return (
    <div className="row g-0">
      <div className="col-3 position-relative">
        <img
          src={item.imgURL}
          className="img-fluid rounded-start bg-white rounded"
          alt={`Foto producto ${item.nombre}`}
        />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {item.cantidad}
          <span className="visually-hidden">cantidad</span>
        </span>
      </div>
      <div className="col-7">
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "12px" }}>
            {item.nombre}
          </h5>
        </div>
      </div>
      <div className="col-2">
        <p className="card-text mt-4 fw-bold" style={{ fontSize: "12px" }}>
          {useFormatPrice(item.total)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;
