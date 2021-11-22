import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children, titulo, showModal, closeModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center  bg-black bg-opacity-80 ${
        showModal ? "scale-1 " : "scale-0"
      }`}
      id="modal"
    >
      <div
        className={`absolute w-full max-h-96 overflow-y-auto max-w-lg p-5 mx-auto my-auto rounded-xl shadow-lg  bg-white transition duration-300 ${
          showModal ? "scale-1" : "scale-0"
        }`}
      >
        {titulo && (
          <div className="w-full flex justify-between h-8 items-center border-b-2 border-gray-black">
            <h2 className="font-sans text-xl">{titulo}</h2>
            <button className="text-2xl" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </button>
          </div>
        )}
        <div className="w-full h-full overflow-y-auto bg-white ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
