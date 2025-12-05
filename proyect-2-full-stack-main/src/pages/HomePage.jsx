import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getProductos } from "../services/productService";

const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos()
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <section className="container py-5 text-center">
          <h3>Cargando productos...</h3>
        </section>
        <Footer />
      </>
    );
  }

  const destacados = productos.slice(0, 4);

  return (
    <>
      <Header />

      {/* HERO */}
      <header
        className="hero text-center text-white"
        style={{
          background: "url('/img/producto/manzanafuji.jpg') center/cover no-repeat",
          padding: "120px 20px",
          textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
        }}
      >
        <div className="container">
          <h1>Bienvenido a HuertoHogar</h1>
          <p>Frutas, verduras y productos orgánicos frescos.</p>
          <Link to="/catalogo" className="btn btn-light btn-lg text-success fw-bold">
            🌱 Ver Catálogo
          </Link>
        </div>
      </header>

      {/* DESTACADOS */}
      <section className="container py-5">
        <h2 className="text-center fw-bold text-success mb-4">
          🥬 Productos Destacados
        </h2>

        <div className="row">
          {destacados.map((p) => (
            <div className="col-md-3 mb-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <Link to={`/producto/${p.id}`}>
                  <img
                    src={p.img}
                    className="card-img-top"
                    alt={p.nombre}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>

                <div className="card-body text-center">
                  <h5 className="card-title">
                    <Link
                      to={`/producto/${p.id}`}
                      className="text-success text-decoration-none"
                    >
                      {p.nombre}
                    </Link>
                  </h5>
                  <p className="card-text text-success fw-bold">
                    ${p.precio} / {p.unidad}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <Link to="/catalogo" className="btn btn-success btn-lg">
            Ver más productos
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
