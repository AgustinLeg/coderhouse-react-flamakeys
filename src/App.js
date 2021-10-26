import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cart from './pages/Cart/Cart'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./context/cartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="bg-light container-fluid fixed-top">
          <NavBar  />
        </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:nombre">
            <ItemListContainer />
          </Route>
          <Route exact path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
