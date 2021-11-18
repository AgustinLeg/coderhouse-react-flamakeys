import React, { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import NavUser from "../../pages/User/components/NavUser";

import CartWidget from "../CartWidget/CartWidget";
import Spinner from "../Stateless/Spinner/Spinner";
import UserWidget from "../UserWidget/UserWidget";

import "./styles.css";

const NavBar = () => {

  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const path = location.pathname.slice(1, 10);
  const {categories} = useCategories()

  return (
    <>
      {categories && (
        <>
          <div className="row w-100 bg-dark m-0 text-white text-center">
            <p className="py-1 m-0">
              Proyecto Final de
              <a
                href="https://www.coderhouse.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CoderHouse"
                className="format-link mx-2"
              >
                CoderHouse
              </a>
            </p>
          </div>
          <div className="container-lg m-auto px-0 py-2">
            <div className="row">
              <div className="col-8 col-lg-9">
                <nav className="navbar navbar-light navbar-expand-xl bg-white w-100 p-0">
                  <div className="container-fluid">
                    <h1 className="w-25">
                      <NavLink
                        className="navbar-brand mb-0 h1"
                        to="/"
                        style={{
                          fontFamily: "Fraunces,sans-serif",
                          fontWeight: "900",
                        }}
                      >
                        <span className="text-danger">Flama</span>Keys
                      </NavLink>
                    </h1>
                    <div
                      className="offcanvas offcanvas-end"
                      tabIndex="-1"
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                    >
                      <div className="offcanvas-header">
                        <h5
                          className="offcanvas-title"
                          id="offcanvasNavbarLabel"
                        >
                          Menu
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="offcanvas-body w-100">
                        <ul className="navbar-nav w-100 justify-content-around">
                          {categories.map((cat) => {
                            return (<li key={cat.id} className="nav-item dropdown">
                              <NavLink
                                exact
                                to={cat.key === '' ? '/productos' : `/categoria/${cat.key}`}
                                className="nav-link fs-6 text-black"
                                activeClassName="active"
                                >
                                {cat.nombre}
                              </NavLink>
                            </li>)
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="actionsNavbar d-flex">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-4 col-lg-3 d-flex justify-content-center align-items-center">
                <UserWidget setLoading={setLoading} />
                <CartWidget path={path} />
              </div>
            </div>
            {path === "mi-cuenta" && <NavUser />}
          </div>
        </>
      )}
      {loading && (
        <div className="position-fixed bg-dark w-100 h-100 top-0 end-0 zindex-dropdown bg-opacity-25">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default React.memo(NavBar);
