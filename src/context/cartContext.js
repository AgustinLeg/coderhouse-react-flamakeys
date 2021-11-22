import React, { useState, createContext, useContext, useEffect } from "react";
// import firebase from "firebase";
// import { getFirestore } from "../services/getFirebase";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const itemsInicial = JSON.parse(localStorage.getItem("cart")) || [];

  const [items, setItems] = useState(itemsInicial);
  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0)


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
    const calcularTotal = () => {
      let suma = items.reduce(function (total, item) {
        return total + item.total;
      }, 0);
      setTotal(suma);
      
      const qty = items.reduce(function (total, item) {
        return total + item.cantidad;
      }, 0);
      setCantidad(qty)
    };

    calcularTotal();
  }, [items]);

  const addItem = (item) => {
    const existe = items.some((i) => i.id === item.id);
    if (existe) {
      isInCart(item);
    } else {
      item.total = item.precio * item.cantidad;
      setItems([...items, item]);
    }
  };

  const removeItem = (id) => {
    const itemsActualizado = items.filter((i) => i.id !== id);
    setItems(itemsActualizado);
  };

  const clearCart = () => setItems([]);

  const isInCart = (item) => {
    const itemsActualizado = items.map((i) => {
      if (i.id === item.id) {
        const restante = i.stock - i.cantidad;
        if(restante !== 0){
          i.cantidad = Number(item.cantidad);
          i.total = i.precio * Number(item.cantidad);
        }
        return i;
      } else {
        return i;
      }
    });
    setItems(itemsActualizado);
  };


  return (
    <CartContext.Provider
      value={{
        items,
        order,
        total,
        cantidad,
        // errorCheckout,
        setOrder,
        addItem,
        removeItem,
        clearCart,
        // newOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
