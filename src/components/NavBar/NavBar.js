import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import { toggleCart, toggleNav } from "../../helpers";
import useCategories from "../../hooks/useCategories";

import CartWidget from "../Widgets/CartWidget";
import UserWidget from "../Widgets/UserWidget";
import FavWidget from "../Widgets/FavWidget";

import Logo from '../../assets/flama-logo.svg'


const NavBar = () => {
  const { categories } = useCategories();

  return (
    <>
      {categories && (
        <>
          <section className="relative mx-auto">
            <nav className="flex justify-between bg-white text-gray-900 w-screen md:px-2">
              <div className="md:px-5 flex w-full items-center lg:items-end">
                <NavLink
                  exact
                  to="/"
                >
                  <img src={Logo} alt="logo FlamaKeys" className="h-16" />
                </NavLink>

                <ul className="md:flex mx-auto font-heading space-x-12">
                  <div className="sidebar bg-white w-full h-screen lg:h-auto space-y-4 py-7 px-2 absolute inset-y-0 right-0 transform translate-x-full lg:relative lg:translate-x-0 transition duration-500 ease-in-out lg:w-full lg:space-y-0 lg:py-0 z-40 lg:z-20">
                    <nav className="h-full">
                      <div className="lg:hidden">
                        <h2 className="font-bold my-2">Menu</h2>
                        <hr />
                      </div>
                      <button
                        className="absolute top-5 right-5 font-extrabold lg:hidden text-2xl"
                        onClick={toggleNav}
                      >
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="fs-4 mx-2 d-block"
                        ></FontAwesomeIcon>
                      </button>
                      <div className="nav__conatiner w-full lg:pr-10 flex justify-start flex-col lg:flex-row h-full pb-10 lg:pb-2 ">
                      <li>
                            <NavLink
                              exact
                              to="/productos"
                              className="block lg:inline-block px-2 lg:mx-4 my-5 lg:my-0 hover:text-red-500"
                              activeClassName="text-red-500 lg:border-b-4 border-red-500"
                              onClick={toggleNav}
                            >
                              Todos los productos
                            </NavLink>
                          </li>
                        {categories.map((cat) => (
                          <li key={cat.id}>
                            <NavLink
                              exact
                              to={
                                cat.key === " "
                                  ? "/productos"
                                  : `/categoria/${cat.key}`
                              }
                              className="block lg:inline-block px-2 lg:mx-4 my-5 lg:my-0 hover:text-red-500"
                              activeClassName="text-red-500 lg:border-b-4 border-red-600"
                              onClick={toggleNav}
                            >
                              {cat.nombre}
                            </NavLink>
                          </li>
                        ))}
                      </div>
                    </nav>
                  </div>
                </ul>
              </div>
              <div className="flex items-end justify-between text-2xl pr-0 md:pr-5 pb-2">
                <CartWidget />
                <FavWidget />
                <UserWidget />
                <button
                  className="lg:hidden navbar-burger text-2xl mr-5 md:mr-5 "
                  onClick={toggleNav}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    className="fs-4 mx-2 d-block"
                  ></FontAwesomeIcon>
                </button>
              </div>
            </nav>
          </section>
          <div
            className="fixed w-screen h-screen bg-navbar right-0 transform translate-x-full z-10 bg-black bg-opacity-80	transition duration-400 lg:hidden"
            onClick={toggleNav}
          ></div>
          <div
            className="fixed w-screen h-screen bg-cart-sidebar  right-0 transform translate-x-full z-10 bg-black bg-opacity-80 transition duration-500"
            onClick={toggleCart}
          ></div>
        </>
      )}
    </>
  );
};
export default React.memo(NavBar);
