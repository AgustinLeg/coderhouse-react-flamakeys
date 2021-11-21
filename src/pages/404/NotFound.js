import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/robot_notfound.svg";

const NotFound = ({ msg }) => {
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="container flex pt-32 md:pt-0 flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            {msg}{" "}
          </p>
          <p className="mb-8">
            Haz click aqui para volver al inicio
          </p>
          <Link
            to="/"
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-gray-600 hover:bg-gray-700"
          >
            Inicio
          </Link>
        </div>
        <div className="max-w-lg">
          <img
            src={notfound}
            alt="not found illustration"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
