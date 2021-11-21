import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-white z-50 flex justify-center items-center">
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    </div>
  );
};

export default Loader;
