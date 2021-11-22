import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";

import { useCartContext } from "../../context/cartContext";
import { useAuthContext } from "../../context/authContext";

import useFormatPrice from "../../hooks/useFormatPrice";
import useNewOrder from "../../hooks/useNewOrder";
import useForm from "../../hooks/useForm";

import MiniCartItem from "../../components/Cart/MiniCartItem";
import UserInfo from "../User/components/UserInfo";
import { TostMessage } from "../../components/Alerts/Alerts";
import Spinner from "../../components/Stateless/Spinner/Spinner";

const Checkout = () => {
  const { currentUser } = useAuthContext();
  const { items, cantidad, total} = useCartContext();
  const { newOrder, errorCheckout} = useNewOrder();
  const history = useHistory();
  const { clearCart } = useCartContext();
  const { reset } = useForm();
  const [loading, setLoading] = useState(false)
  
  const handleSubmit =  async(values) => {
    setLoading(true)
    const id =  currentUser ? currentUser.uid : null
    newOrder(values,id)
      .then(() => {
        setLoading(false)
        reset();
        history.push("/finalizar-compra/detalle-compra");
        clearCart();
      })
      .catch(() => {
        setLoading(false)
        return TostMessage.fire({icon: "error", title:errorCheckout.msg})
      })
  };

  return (
    <div className="container mx-auto px-6">
      {loading && <Spinner />}
      <h3 className="text-gray-700 text-4xl font-bold">Finalizar Compra</h3>
      <div className="flex flex-col lg:flex-row mt-8">
        <div className="w-full lg:w-1/2 order-2">
          <UserInfo callback={handleSubmit} btnText="Finalizar Compra" />
        </div>
        <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
          <div className="flex justify-center lg:justify-end">
            <div className="border rounded-md max-w-md w-full px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-700 font-medium">
                  Orden Final ({cantidad})
                </h3>
                <Link to="/cart" className="text-gray-600 text-sm">
                  Editar
                </Link>
              </div>
              {items.map((item) => {
                const sinStock =errorCheckout.items.some(error => error.id === item.id)
                return <MiniCartItem item={item} key={item.id} sinStock={sinStock}/>
              }
              )}
              <h3 className="text-gray-700 font-medium mt-10 text-center">
                Total: {useFormatPrice(total)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
