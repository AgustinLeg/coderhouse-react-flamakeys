import React from 'react';

import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return ( 
        <div className="container-fluid d-flex px-0 fixed-top">
            <nav className="navbar navbar-light navbar-expand-md bg-light w-100">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1" href="#!">BB Fotografia</a>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body w-100">
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/productos" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                            <li><a className="dropdown-item" href="#!">Producto1</a></li>
                            <li><a className="dropdown-item" href="#!">Producto2</a></li>
                            <li><a className="dropdown-item" href="#!">Producto3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Info & Ayuda</a>
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
            <CartWidget />
        </div>
     )
};
 
export default NavBar;