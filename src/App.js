import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Spinner from "./components/Stateless/Spinner/Spinner";
import productos from "./data/productos";

function App() {
  const [items, setItems] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    getItems.then((res) => {
      setItems(res);
    });
  }, [items]);

  const addCantidadCarrito = (cantidad) => {
    setCantidadCarrito(cantidadCarrito + cantidad);
  };

  return (
    <BrowserRouter>
      <header className="bg-light container-fluid fixed-top">
        <NavBar cantidadCarrito={cantidadCarrito} />
      </header>
      <Switch>
        <Route exact path="/">
          {items.length > 0 ? <ItemListContainer items={items} /> : <Spinner />}
        </Route>
        <Route exact path="/categoria/:nombre">
          <ItemListContainer items={items} />
        </Route>
        <Route exact path="/producto/:id">
          <ItemDetailContainer
            items={items}
            addCantidadCarrito={addCantidadCarrito}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
