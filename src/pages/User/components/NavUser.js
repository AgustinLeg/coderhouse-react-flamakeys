import React from "react";
import { NavLink } from "react-router-dom";

const NavUser = () => {
  return (
    <div className="border d-flex ">
      <div className="card flex-fill">
        <NavLink className="btn p-5 fw-bold" exact to="/mi-cuenta"  activeClassName={'nav-active'}>
          Mis Datos
        </NavLink>
      </div>
      <div className="card flex-fill">
        <NavLink className="btn p-5 fw-bold" exact to="/mi-cuenta/pedidos" activeClassName={'nav-active'}>
          Mis Pedidos
        </NavLink>
      </div>
      <div className="card flex-fill">
        <NavLink className="btn p-5 fw-bold" exact to="/mi-cuenta/restablecer-contrasena" activeClassName={'nav-active'}>
          Restablecer Contraseña
        </NavLink>
      </div>
      <div className="card flex-fill">
        <NavLink className="btn p-5 fw-bold" exact to="/mi-cuenta/borrar" activeClassName={'nav-active'}>
          Borrar mi cuenta
        </NavLink>
      </div>
    </div>
  );
};

export default React.memo(NavUser);


