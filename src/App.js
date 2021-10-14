import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  const [items, setItems] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

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
          <ItemListContainer items={items} setItems={setItems} />
        </Route>
        <Route exact path="/categoria/:nombre">
          <ItemListContainer items={items} setItems={setItems}/>
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
