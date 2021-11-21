import React from "react";

const ItemCount = ({ stock, cantidad, setCantidad, initial = 1 }) => {
  const removeCant = () => {
    if (cantidad > initial) setCantidad((c) => c - 1);
  };
  const addCant = () => {
    if (cantidad < stock) setCantidad((c) => c + 1);
  };

  const updateQty = ({ target }) => {
    setCantidad(Number(target.value));
  };
  return (
    <div className="custom-number-input h-10 w-24 mx-auto">
      <div className="flex flex-row h-10 w-full relative bg-transparent mt-1 border">
        <button
          data-action="decrement"
          className=" bg-white text-gray-600 hover:text-gray-100 hover:bg-gray-600 h-full w-20 cursor-pointer outline-none"
          onClick={() => removeCant()}
        >
          <span className="m-auto text-2xl font-base">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
          name="custom-input-number"
          value={cantidad}
          min={initial}
          max={stock}
          onChange={updateQty}
        />
        <button
          data-action="increment"
          className="bg-white text-gray-600 hover:text-gray-100 hover:bg-gray-600 h-full w-20 cursor-pointer"
          onClick={() => addCant()}
        >
          <span className="m-auto text-2xl font-base">+</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
