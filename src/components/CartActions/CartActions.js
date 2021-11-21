import React from "react";

import useFormatPrice from "../../hooks/useFormatPrice";

import { toggleCart } from "../../helpers";

import Button from "../Stateless/Buttons/Button";
import LinkButton from "../Stateless/Buttons/LinkButton";

const CartActions = ({ total, clearCart }) => {


  return (
    <div className="flex flex-col px-2">
      <Button onClick={clearCart} color="red-600" text="Vaciar Carrito" />
      <div className="flex justify-between my-5">
        <h6 className="font-semibold text-xl">Total:</h6>
        <span className="font-semibold text-xl">{useFormatPrice(total)}</span>
      </div>
      <LinkButton onClick={toggleCart} path="/cart" text="Finalizar Compra" />
    </div>
  );
};

export default CartActions;
