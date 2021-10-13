import React from 'react';
import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({cantidadCarrito}) => {
    return ( 
        <div className="container d-flex px-0">
            <nav className="navbar navbar-light navbar-expand-md bg-light w-100">
            <div className="container-fluid">
                <h1><a className="navbar-brand mb-0 h1" href="/" style={{fontFamily:"Fraunces,sans-serif",fontWeight:"900"}}><span  className="text-danger">Flama</span>Keys</a></h1>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body w-100">
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/teclados">Teclados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/mouse">Mouse</Link>
                        </li>
                    </ul>
                 </div>
                </div>
                <div className="actionsNavbar d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            </nav>
            <CartWidget
                cantidadCarrito={cantidadCarrito}
            />
        </div>
     )
};
 
export default NavBar;