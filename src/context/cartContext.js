import React, { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const itemsInicial = JSON.parse(localStorage.getItem('cart')) || [];
  
  const [items, setItems] = useState(itemsInicial);
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(items))
    calcularTotal()
  },[items])

  const addItem = (item) => {
    const existe = items.some((i) => i.id === item.id);
    if (existe) {
      isInCart(item)
    } else {
      item.total = item.precio * item.cantidad;
      setItems([...items, item]);
    }
  }; 

  const removeItem = id =>{
    const itemsActualizado = items.filter((i) => i.id !== id);
    setItems(itemsActualizado);
  }

  const clearCart = () => setItems([])

  const isInCart = item =>{
    const itemsActualizado = items.map((i) => {
      if (i.id === item.id) {
        i.cantidad += item.cantidad;
        i.total = i.precio * i.cantidad;
        return i;
      } else {
        return i;
      }
    });
    setItems(itemsActualizado);
  }

  const calcularTotal = () => {
    let suma = items.reduce(function (total, item) {
      return total + item.total;
    }, 0);
    setTotal(suma);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        cantidad,
        total,
        setCantidad,
        addItem,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
