import React from "react";
import { Link } from "react-router-dom";

import useCategories from "../../hooks/useCategories";

import Loader from "../../components/Stateless/Loader/Loader";

import banner from "../../assets/banner.jpg";

const catImages = require.context("../../assets/categories", true);

const Home = () => {
  const loading = false;
  const { categories } = useCategories();

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          {categories ? (
            <>
              <div className="container-fluid p-0 position-relative">
                <img src={banner} alt="" className="w-100" />
                <div className="position-absolute top-0 w-100 h-100 end-0 text-white d-flex flex-column align-items-center justify-content-end">
                  <Link
                    exact 
                    to='/productos'
                    className="btn border-white py-3 rounded-0 fw-bold text-white my-5"
                  >
                    Todos los Productos
                  </Link>
                </div>
              </div>
              <div className="container-fluid p-0">
                <h2 className="text-center my-5 text-uppercase text-black fw-bold">
                  Productos
                </h2>
                <div className="card__container p-3">
                  {categories.map((cat) => (
                    <div
                      className="card bg-light d-flex justify-content-center align-items-center"
                      key={cat.id}
                    >
                      <img
                        src={catImages(`./${cat.key}.png`).default}
                        className="card-img w-50"
                        style={{ paddingTop: "75px" }}
                        alt={`foto producto de un ${cat.key}`}
                      />
                      <Link
                        exact="true"
                        to={`categoria/${cat.key}`}
                        className="text-black"
                      >
                        <div className="card-img-overlay">
                          <h5 className="card-title text-center fs-2 fw-bold">
                            {cat.nombre}
                          </h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
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
