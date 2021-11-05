import React, { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import CheckoutBox from './CheckoutBox'
import Spinner from "../../components/Stateless/Spinner/Spinner";
import useFormatPrice from "../../hooks/useFormatPrice";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const { items, total } = useCartContext();
  const [loader, setLoader] = useState(false)
  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <div className="col-md-7">
          <CheckoutBox setLoader={setLoader}/>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-uppercase">Resumen de tu pedido</h5>
              <hr />
              {items.map((item) => (
                <CheckoutItem item={item} key={item.id}/>
              ))}
              <hr />
              <h6 className="mb-5 fs-4 d-flex justify-content-between text-uppercase fw-bold">
                Total: <span>{useFormatPrice(total)}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {loader && <div className='position-fixed bg-dark w-100 h-100 top-0 end-0 zinfex-fixed bg-opacity-25'><Spinner /></div>}
    </div>
  );
};

export default Checkout;
