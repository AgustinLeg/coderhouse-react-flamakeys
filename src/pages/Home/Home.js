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
              <div className="w-screen relative">
                <img src={banner} alt="" className="w-100" />
                <div className="absolute top-0 left-0 w-full h-full  text-white flex flex-col items-center justify-end pb-4">
                  <Link to='/productos' className="border  py-1 px-5 md:py-3  md:px-10 bg-white text-black transition-all">Ver todos los productos</Link>
                </div>
              </div>
              <div className="p-4 text-center mx-auto">
                <h2 className="uppercase text-gray-800 text-3xl font-bold my-10">
                  Productos
                </h2>
                <div className="grid gap-6 grid-cols-1 relative md:grid-cols-2 mt-6 mx-auto max-w-5xl">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="card bg-gray-100 relative z-0 py-10 md:py-0"
                    >
                      <Link
                        to={`categoria/${cat.key}`}
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
