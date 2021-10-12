import React, { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Stateless/Spinner/Spinner";

const ItemDetailContainer = ({ addCantidadCarrito }) => {
  const [item, setItem] = useState(null);
  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 0,
        nombre: "Foto Simple",
        precio: 100,
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, deserunt similique aliquam temporibus eaque autem aspernatur ipsum animi eveniet, totam perspiciatis atque laudantium quam commodi unde quis, asperiores ex nesciunt.",
        img: "https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES.jpg",
        stock: 4,
      });
    }, 2000);
  });

  getItems.then((res) => setItem(res));

  return (
    <div
      className="container-fluid d-flex align-items-center align-middle"
      style={{ height: "100vh" }}
    >
      {item ? (
        <ItemDetail item={item} addCantidadCarrito={addCantidadCarrito} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ItemDetailContainer;
