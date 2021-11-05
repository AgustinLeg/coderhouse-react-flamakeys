import React from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../context/authContext";
import { useCartContext } from "../../context/cartContext";

import { useForm } from "../../hooks/useForm";
import useNewOrder from "../../hooks/useNewOrder";

const CheckoutBox = ({setLoader}) => {
  const {newOrder} = useNewOrder()
  const {currentUser} = useAuthContext()
  const {clearCart} = useCartContext()
  const [values, handleInputChange, reset] = useForm({
    given_name: '',
    family_name: "",
    email: "",
    direccion: "",
    telefono: "",
    uid:currentUser?.uid || null
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
      e.target.className += ' was-validated'
      return;
    }
    try {
      setLoader(true)
      await newOrder(values)
      setTimeout(() => {
        reset();
        setLoader(false)
        history.push('/finalizar-compra/detalle-compra')
        clearCart()
      }, 3000);
    } catch (error) {}
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
            <div className="invalid-feedback">Porfavor ingresa tu direccion</div>
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
          <div className="col-12 d-flex flex-column justify-content center">
            <button type="submit" className="btn btn-primary my-4">
              Finalizar Compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutBox;
