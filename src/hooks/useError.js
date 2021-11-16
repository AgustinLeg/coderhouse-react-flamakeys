import { useState } from "react";

const useError = () => {
  const [error, setError] = useState(false);

  const newError = (tiempo = 3000) => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, tiempo);
  };
  return { error, newError };
};

export default useError;
