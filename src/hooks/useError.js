import { useState } from "react";

const useError = () => {
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState('');

  const newError = (msg= '',tiempo = 3000) => {
    setError(true);
    setMsgError(msg)
    setTimeout(() => {
      setError(false);
    }, tiempo);
  };
  return { error, msgError, newError };
};

export default useError;
