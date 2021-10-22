import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./context/cartContext";


function App() {
  const [items, setItems] = useState([]);
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="bg-light container-fluid fixed-top">
          <NavBar  />
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
