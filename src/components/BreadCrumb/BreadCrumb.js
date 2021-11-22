import React from "react";
import { NavLink } from "react-router-dom";

const BreadCrumb = ({ navigation = [] }) => {
  return (
    <nav
      className="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <NavLink
              exact
              to="/"
              className="text-gray-400 ml-1 md:ml-2 text-sm font-medium capitalize"
              activeClassName="font-bold text-gray-900"
            >
              Inicio
            </NavLink>
          </div>
        </li>
        {navigation.map((crumb, index) => (
          <li aria-current="page" key={index}>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <NavLink
                exact
                to={crumb.path}
                className="text-gray-400 ml-1 md:ml-2 text-sm font-medium capitalize"
                activeClassName="font-bold text-gray-900"
              >
                {crumb.nombre}
              </NavLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
