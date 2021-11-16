import React, { useState } from "react";
import { useHistory } from "react-router";

import { useAuthContext } from "../../context/authContext";
import { useCartContext } from "../../context/cartContext";

import useError from "../../hooks/useError";
import { useForm } from "../../hooks/useForm";
import useNewOrder from "../../hooks/useNewOrder";

import Error from "../../components/Error/Error";

const CheckoutBox = ({ setLoader }) => {
  const { newOrder, errorCheckout } = useNewOrder();
  const { currentUser } = useAuthContext();
  const { clearCart } = useCartContext();
  const { error, newError } = useError();
  const [msgError, setMsgError] = useState("");
  const [values, handleInputChange, reset] = useForm({
    given_name: "",
    family_name: "",
    email: "",
    direccion: "",
    telefono: "",
  });
  const { given_name, family_name, email, direccion, telefono } = values;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      given_name.trim() === "" ||
      family_name.trim() === "" ||
      email.trim() === "" ||
      direccion.trim() === "" ||
      telefono.trim() === ""
    ) {
      e.target.classList.add("was-validated");
      return;
    }
    setLoader(true);
    try {
      await newOrder(values, currentUser.uid || null);
      console.log("paso");
      setLoader(false);
      reset();
      history.push("/finalizar-compra/detalle-compra");
      clearCart();
    } catch (error) {
      console.log('error');
      setLoader(false);
      setMsgError(errorCheckout.msg);
      newError();
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header text-uppercase">
        <span className="fw-bold fs-5 mx-2">1</span> Datos Personales{" "}
      </div>
      <div className="card-body">
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <label htmlFor="nombreValidacion" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreValidacion"
              name="given_name"
              value={given_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="apellidoValidacion" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellidoValidacion"
              name="family_name"
              value={family_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="correoValidacion" className="form-label">
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="correoValidacion"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="CityValidation" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="CityValidation"
              name="direccion"
              value={direccion}
              onChange={handleInputChange}
              required
            />
            <div className="invalid-feedback">
              Porfavor ingresa tu direccion
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="telefonoValidacion" className="form-label">
              Telefono
            </label>
            <input
              type="number"
              className="form-control"
              id="telefonoValidacion"
              name="telefono"
              value={telefono}
              onChange={handleInputChange}
              required
            />
          </div>
          {error ? (
            <>
              <Error msg={msgError} />
            </>
          ) : (
            <div className="col-12 d-flex flex-column justify-content center">
              <button type="submit" className="btn btn-dark my-4">
                Finalizar Compra
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutBox;
