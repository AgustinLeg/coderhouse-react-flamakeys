import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useCategories from "../../hooks/useCategories";

import Loader from "../../components/Stateless/Loader/Loader";

import banner from "../../assets/banner.jpg";

const catImages = require.context("../../assets/categories");

const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setLoading(false)
  }, [])
  const { categories } = useCategories();

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          {categories ? (
            <>
              <div className="mx-auto max-w-5xl relative">
                <img src={banner} alt="banner teclado" className="w-full" />
                <div className="absolute top-0 right-0 w-3/4 lg:w-1/2 h-full text-white flex flex-col items-center justify-center p-2">
                  <h3 className="text-xl text-center lg:text-3xl pb-5 font-sans">Las mejores marcas al mejor precio</h3>
                  <Link to='/productos' className="border py-1 px-3 md:py-3  md:px-10 bg-transparent border-white-1 text-white text-center transition-colors transition-duration-500 hover:bg-white hover:text-black">Ver todos los productos</Link>
                </div>
              </div>
              <div className="p-4 text-center mx-auto">
                <h2 className="uppercase text-gray-800 text-3xl font-bold my-10">
                  Productos
                </h2>
                <div className="grid gap-6 grid-cols-1 relative md:grid-cols-2 mt-6 mx-auto max-w-5xl">
                <div
                      className="card bg-gray-100 relative z-0 py-10 md:py-0"
                    >
                      <Link
                        to="/productos"
                        className="text-gray-800"
                      >
                        <img
                          src={catImages(`./productos.png`)}
                          className="w-full mx-auto"
                          alt={`foto producto de todos los productos`}
                        />
                        <div className="absolute w-full pb-2 h-full top-0 left-0 flex justify-center items-end">
                          <h5 className="font-bold text-2xl">Todos los productos</h5>
                        </div>
                      </Link>
                    </div>
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="card bg-gray-100 relative z-0 py-10 md:py-0"
                    >
                      <Link
                        to={`/categoria/${cat.key}`}
                        className="text-gray-800"
                      >
                        <img
                          src={catImages(`./${cat.key}.png`)}
                          className="w-3/4 mx-auto"
                          alt={`foto producto de un ${cat.key}`}
                        />
                        <div className="absolute w-full pb-2 h-full top-0 left-0 flex justify-center items-end">
                          <h5 className="font-bold text-2xl">{cat.nombre}</h5>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </>
      )}
    </section>
  );
};

export default Home;
