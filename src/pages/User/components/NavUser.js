import React from "react";
import { NavLink } from "react-router-dom";

const NavUser = () => {
  return (
    <div className="list-group">
      <NavLink
        className="list-group-item"
        exact
        to="/mi-cuenta"
        activeClassName="flama-active"
      >
        Mis Datos
      </NavLink>
      <NavLink
        className="list-group-item"
        exact
        to="/mi-cuenta/pedidos"
        activeClassName="flama-active"
      >
        Mis Pedidos
      </NavLink>
      <NavLink
        className="list-group-item"
        exact
        to="/mi-cuenta/restablecer-contrasena"
        activeClassName="flama-active"
      >
        Restablecer Contraseña
      </NavLink>
      <NavLink
        className="list-group-item"
        exact
        to="/mi-cuenta/borrar"
        activeClassName="flama-active"
      >
        Borrar mi cuenta
      </NavLink>
    </div>
  );
};

export default React.memo(NavUser);
