import React from "react";

const CartItem = ({item,removeItem}) => {
  const {id,img,nombre,total,cantidad} = item
  return (
    <div className="card mb-5 border-0" style={{maxWidth: "400px"}}>
      <div className="row g-0">
        <div className="col-2">
          <img src={img} className="img-fluid rounded-start" alt={`Foto producto ${nombre}`} />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title" style={{fontSize:"12px"}}>{nombre}</h5>
            <p className="card-text my-0"><small>Cantidad: {cantidad}</small></p>
          </div>
        </div>
        <div className="col-2 d-flex flex-column align-items-center ">
        <button type="button" className="btn-close" aria-label="Close" onClick={() => removeItem(id)}></button>
         <p className="card-text mt-4 fw-bold">${total}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
