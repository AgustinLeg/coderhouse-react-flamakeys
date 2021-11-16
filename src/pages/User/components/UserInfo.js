import React, { useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import { useForm } from "../../../hooks/useForm";
import Error from "../../../components/Error/Error";
import useError from "../../../hooks/useError";
import Spinner from "../../../components/Stateless/Spinner/Spinner";

const UserInfo = ({ user }) => {
  const { nombre, apellido, email, telefono, id } = user;
  const { updateUser } = useAuthContext();
  const [values, handleInputChange] = useForm({
    nombre,
    apellido,
    email,
    telefono,
  });

  const { error, newError } = useError();
  const [loader, setLoader] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      console.log('inicio')
      console.log(updateUser(id, values));
      console.log('fin')
      setLoader(false);
      setDataUpdate(true);
    } catch (error) {
      setLoader(false);
      newError("Algo salio mal! , intenta refrescando la pagina");
    }
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
            name="nombre"
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
            name="apellido"
            value={values.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <p className="form-control" id="inputEmail">
            {email}
          </p>
        </div>
        <div className="col-12">
          <label htmlFor="inputTelefono" className="form-label">
            Telefono
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAddress"
            name="telefono"
            value={values.telefono}
            onChange={handleInputChange}
          />
          {values.telefono.length === 0 &&
            "No contamos con tu numero de celular :( "}
        </div>
        <div className="col-12 d-flex flex-column justify-content center">
          <button type="submit" className="btn btn-dark my-4">
            Actualizar mis datos
          </button>
        </div>
      </form>
      {dataUpdate && (
        <p
          className="text-center my-4 text-success border border-success rounded-0 p-2"
          role="alert"
        >
          Datos Actualizado Correctamente
        </p>
      )}
      {error.estado && <Error msg={error.msg} />}
      {loader && (
        <div className="position-fixed bg-dark w-100 h-100 top-0 end-0 zindex-dropdown bg-opacity-25">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default React.memo(UserInfo);
