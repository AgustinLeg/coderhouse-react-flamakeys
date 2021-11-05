import React from "react";
import useFormatPrice from "../../hooks/useFormatPrice";

const CheckoutItem = ({ item }) => {
  return (
    <div className="row g-0">
      <div className="col-3 p-3">
        <img
          src={item.imgURL}
          className="img-fluid rounded-start"
          alt={`Foto producto ${item.nombre}`}
        />
      </div>
      <div className="col-7">
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "12px" }}>
            {item.nombre}
          </h5>
          <span
            className="text-uppercase text-success"
            style={{ fontSize: "14px" }}
          >
            cantidad {item.cantidad}
          </span>
        </div>
      </div>
      <div className="col-2">
        <p className="card-text mt-4 fw-bold" style={{ fontSize: "12px" }}>
          {useFormatPrice(item.total)}{" "}
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;
