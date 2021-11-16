import React, { useState, useEffect } from "react";

import { NavLink, useLocation} from "react-router-dom";
import NavUser from "../../pages/User/components/NavUser";
import { getFirestore } from "../../services/getFirebase";

import CartWidget from "../CartWidget/CartWidget";
import Spinner from "../Stateless/Spinner/Spinner";
import UserWidget from "../UserWidget/UserWidget";

const NavBar = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const path = location.pathname.slice(1,10);

  useEffect(() => {
    const db = getFirestore();

    const getCategories = async () => {
      try {
        const resp = await db.collection("categorias").get();
        setCategories(resp.docs.map((cat) => ({ id: cat.id, ...cat.data() })));
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      {categories && (
        <div className="container-lg px-0 py-2">
        <div className="row">
          <div className="col-8 col-lg-9">
            <nav className="navbar navbar-light navbar-expand-lg bg-white w-100 p-0">
              <div className="container-fluid">
                <h1>
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
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
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
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                      {categories.map((cat) => (
                        <li key={cat.id} className="nav-item">
                          <NavLink
                            exact
                            to={`/categoria/${cat.key}`}
                            className="nav-link"
                            activeClassName="active"
                          >
                            {cat.nombre}
                          </NavLink>
                        </li>
                      ))}
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
                    <span className="navbar-toggler-icon">
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-4 col-lg-3 d-flex justify-content-center align-items-center">
            <UserWidget setLoading={setLoading}/>
            <CartWidget path={path}/>
          </div>
        </div>
        </div>
      )}
    {path === 'mi-cuenta' && <NavUser />}
    {loading && <div className='position-fixed bg-dark w-100 h-100 top-0 end-0 zindex-dropdown bg-opacity-25'><Spinner /></div>}
    </>
  );
};

export default React.memo(NavBar);
