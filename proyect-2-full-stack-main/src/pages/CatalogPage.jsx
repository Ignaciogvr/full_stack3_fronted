import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos } from "../services/productService";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CatalogoPage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <>
      <Header />

      <section className="container py-5">
        <h2 className="text-center text-success fw-bold mb-4">
          🛒 Catálogo de Productos
        </h2>

        <div className="row">
          {productos.map((p) => (
            <div className="col-md-3 mb-4" key={p.id}>
              <div className="card shadow-sm h-100">
                <Link to={`/producto/${p.id}`}>
                  <img
                    src={p.img}
                    alt={p.nombre}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>

                <div className="card-body text-center">
                  <h5 className="fw-bold text-success">{p.nombre}</h5>
                  <p>${p.precio} / {p.unidad}</p>

                  <Link
                    to={`/producto/${p.id}`}
                    className="btn btn-outline-success btn-sm"
                  >
                    Ver Producto
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CatalogoPage;
