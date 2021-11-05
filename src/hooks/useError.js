import { useState } from "react";

const useError = () => {
  const initialState = {
    estado: false,
    msg: "",
    tipo: "",
  };
  const [error, setError] = useState(initialState);

  const newError = (msg,tipo,tiempo = 3000) => {
    setError({
      estado:true,
      msg,
      tipo,
    });
    setTimeout(() => {
      setError(initialState);
    }, tiempo);
  };
  return {error,newError}
};

export default useError;
