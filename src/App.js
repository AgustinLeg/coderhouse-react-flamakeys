import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CartProvider from "./context/cartContext";
import AuthProvider from "./context/authContext";
import UserProvider from "./context/userContext";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/404/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/User/components/Login";
import User from "./pages/User/User";
import Register from "./pages/User/components/Register";
import UserOrders from "./pages/User/UserOrders";
import UserPassword from "./pages/User/UserPassword";
import UserDelete from "./pages/User/UserDelete";
import OrderDetail from "./pages/Checkout/OrderDetail";


function App() {
  return (
    <AuthProvider>
      <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <header className="container-fluid fixed-top zindex-tooltip bg-white">
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/categoria/:categoria">
              <ItemListContainer />
            </Route>
            <Route exact path="/producto/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/finalizar-compra">
              <Checkout />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/crear-cuenta">
              <Register />
            </Route>
            <Route exact path="/finalizar-compra/detalle-compra">
              <OrderDetail />
            </Route>
            <PrivateRoute exact path="/mi-cuenta" component={User} redirect='/login'/>
            <PrivateRoute exact path="/mi-cuenta/pedidos" component={UserOrders} redirect='/login'/>
            <PrivateRoute exact path="/mi-cuenta/restablecer-contrasena" component={UserPassword} redirect='/login'/>
            <PrivateRoute exact path="/mi-cuenta/borrar" component={UserDelete} redirect='/login'/>
            <Route path="*">
              <NotFound msg="Ups no encontramos lo que estabas buscando." />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
