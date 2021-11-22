import React, { useState, createContext, useContext, useEffect } from "react";
import { TostMessage } from "../components/Alerts/Alerts";
import { getFirestore } from "../services/getFirebase";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const itemsInicial = JSON.parse(localStorage.getItem("cart")) || [];

  const [items, setItems] = useState(itemsInicial);
  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(0);
  const [descuento, setDescuento] = useState([]);
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  const db = getFirestore();

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
      setCantidad(qty);
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
        if (restante !== 0) {
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

  const checkDisscount = (cupon = "") => {
    return db
      .collection("descuentos")
      .where("cupon", "==", cupon.trim())
      .get()
      .then((resp) => {
        if (isDiscounted) {
          throw new Error("ya tenes un cupon aplicado");
        } else {
          const data = resp.docs.map((descuento) => ({
            id: descuento.id,
            ...descuento.data(),
          }));
          setDescuento(data);
          TostMessage.fire({
            icon: "success",
            title: `cupon ${cupon}`,
            text: "Aplicado correctamente",
          });
          const itemsActualizado = items.map((item) => {
            const totalDescuento = item.total * (data[0].descuento / 100);
            item.total = item.total - totalDescuento;
            item.descuento = cupon;
            return item;
          });
          setItems(itemsActualizado);
          setIsDiscounted(true);
        }
      })
      .catch(() => {
        return TostMessage.fire({
          icon: "error",
          title: `Ups, no enontramos ningun descuento llamado ${cupon}`,
        });
      });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        order,
        total,
        cantidad,
        descuento,
        setDescuento,
        isDiscounted,
        checkDisscount,
        setOrder,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
