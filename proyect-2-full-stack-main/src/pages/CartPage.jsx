import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getCart, removeFromCart, clearCart } from "../services/cartService";

const CartPage = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setCarrito(getCart());
  }, []);

  const eliminar = (id) => {
    removeFromCart(id);
    setCarrito(getCart());
  };

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className="fw-bold text-success mb-4">🛒 Tu Carrito</h2>

        {carrito.length === 0 ? (
          <h4 className="text-center text-muted">Tu carrito está vacío</h4>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((p) => (
                  <tr key={p.id}>
                    <td>{p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>{p.cantidad}</td>
                    <td>${p.precio * p.cantidad}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminar(p.id)}
                      >
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="text-end fw-bold text-success">
              Total: ${total}
            </h3>

            <div className="text-end">
              <button className="btn btn-secondary" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
