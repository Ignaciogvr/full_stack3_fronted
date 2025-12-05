// src/pages/AboutPage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  const ciudades = [
    "Santiago",
    "Puerto Montt",
    "Villarica",
    "Nacimiento",
    "Viña del Mar",
    "Valparaíso",
    "Concepción",
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <header
        className="text-white text-center py-5"
        style={{
          backgroundImage: "url('/img/producto/agricultor.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "140px 20px",
          textShadow: "1px 1px 8px rgba(0,0,0,0.7)"
        }}
      >
        <h1 className="fw-bold">Conócenos</h1>
        <p className="lead">
          Comprometidos con productos frescos y sostenibles para toda tu familia.
        </p>
      </header>

      <main className="container my-5">

        <h2 className="section-title mb-4 text-success text-center">
          Nuestra Filosofía
        </h2>

        <div className="row g-4 mb-5">

          {/* MISIÓN */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <img
                src="/img/producto/frutas.jpg"
                alt="Misión HuertoHogar"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h3 className="fw-bold text-success">Nuestra Misión</h3>
                <p>
                  Proporcionar productos frescos directamente desde el campo,
                  fomentando prácticas agrícolas sostenibles.
                </p>
              </div>
            </div>
          </div>

          {/* VISIÓN */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <img
                src="/img/producto/agricultor.jpg"
                alt="Visión HuertoHogar"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h3 className="fw-bold text-success">Nuestra Visión</h3>
                <p>
                  Ser líderes en distribución de productos frescos y naturales en Chile.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CIUDADES */}
        <section className="text-center">
          <h2 className="section-title mb-4 text-success">Nuestras Tiendas</h2>
          <p className="mb-4">Estamos presentes en varias ciudades de Chile.</p>

          <ul className="d-flex flex-wrap justify-content-center gap-2 list-unstyled">
            {ciudades.map((ciudad, idx) => (
              <li
                key={idx}
                className="bg-light text-success px-3 py-2 rounded shadow-sm"
              >
                {ciudad}
              </li>
            ))}
          </ul>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
