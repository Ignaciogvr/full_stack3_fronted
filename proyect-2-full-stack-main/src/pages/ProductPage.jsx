import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";
import { addToCart } from "../services/cartService";

const ProductPage = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then((res) => setProducto(res.data))
      .catch(() => setProducto(null));
  }, [id]);

  if (!producto) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center">
          <h2>Producto no encontrado</h2>
        </div>
        <Footer />
      </>
    );
  }

  const agregar = () => {
    addToCart(producto, cantidad);
    alert("Producto agregado al carrito ✔️");
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <div className="row">

          {/* Imagen */}
          <div className="col-md-6">
            <img
              src={producto.img}
              alt={producto.nombre}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Información */}
          <div className="col-md-6">
            <h2 className="fw-bold text-success">{producto.nombre}</h2>
            <p className="fw-bold">Precio: ${producto.precio}</p>

            <label>Cantidad:</label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              className="form-select w-25 mb-3"
            >
              {[...Array(producto.stock)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>

            <button className="btn btn-success" onClick={agregar}>
              🛒 Agregar al carrito
            </button>
          </div>
        </div>

        <h3 className="mt-5 text-success">Descripción</h3>
        <p>{producto.descripcion}</p>
      </section>

      <Footer />
    </>
  );
};

export default ProductPage;
