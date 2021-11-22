import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CartProvider from "./context/cartContext";
import AuthProvider from "./context/authContext";
import UserProvider from "./context/userContext";
import FavoriteProvider from "./context/favoriteContext";


import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/404/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";


import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/User/components/Login";
import User from "./pages/User/User";
import Register from "./pages/User/components/Register";
import UserOrders from "./pages/User/UserOrders";
import OrderDetail from "./pages/Checkout/OrderDetail";

import ScrolltoTop from "./helpers/ScrollToTop";

function App() {
  return (
    <AuthProvider>
        <CartProvider>
      <UserProvider>
          <FavoriteProvider>
            <BrowserRouter>
              <ScrolltoTop />
              <header className="fixed w-screen z-40">
                <NavBar />
              </header>
              <main className="m-0 pt-16 min-h-screen w-screen">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/productos">
                    <ItemListContainer />
                  </Route>
                  <Route exact path="/productos/favoritos">
                    <FavoriteItems />
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
                  <PrivateRoute
                    exact
                    path="/mi-cuenta"
                    component={User}
                    redirect="/login"
                  />
                  <PrivateRoute
                    exact
                    path="/mi-cuenta/pedidos"
                    component={UserOrders}
                    redirect="/login"
                  />
                  <Route path="*">
                    <NotFound msg="Ups no encontramos lo que estabas buscando." />
                  </Route>
                </Switch>
              </main>
              <Footer />
            </BrowserRouter>
          </FavoriteProvider>
      </UserProvider>
        </CartProvider>
    </AuthProvider>
  );
}

export default App;
