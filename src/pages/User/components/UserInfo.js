import React from "react";
import { useForm } from "../../../hooks/useForm";

const UserInfo = ({ user }) => {
  const { nombre, apellido, email, telefono } = user;
  const [values, handleInputChange] = useForm({
    nombre,
    apellido,
    email,
    telefono,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "800px" }}>
      <h2 className="title text-center my-5 fw-bold">Mis Datos</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputNombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            name="given_name"
            value={values.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputApellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="inputApellido"
            name="family_name"
            value={values.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputTelefono" className="form-label">
            Telefono
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAddress"
            placeholder="11XXXXXXXX"
            name="telefono"
            value={values.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12 d-flex flex-column justify-content center">
          <button type="submit" className="btn btn-primary my-4">
            Actualizar mis datos
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(UserInfo);
