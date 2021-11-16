import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/robot_notfound.svg";

const NotFound = ({ msg }) => {
  return (
    <div className="row pt-5">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={notfound}
          alt="not found illustration"
          style={{ maxWidth: "300px" }}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
        <p className="fs-2 fw-bold">{msg}</p>
        <button className="btn">
          <Link to="/" className="btn btn-dark text-uppercase">
            Volver al inicio
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
