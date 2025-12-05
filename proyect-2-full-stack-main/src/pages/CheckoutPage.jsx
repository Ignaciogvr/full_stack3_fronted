import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    direccion: "",
    telefono: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = cart.reduce((sum, item) => sum + item.precio * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    alert(
      `Gracias ${form.nombre}, tu pedido de $${total} ha sido recibido. Pronto nos pondremos en contacto.`
    );
    localStorage.removeItem("cart");
    setCart([]);
    setForm({ nombre: "", email: "", direccion: "", telefono: "" });
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <h2 className="text-center fw-bold text-success mb-4">🧾 Checkout</h2>

        {cart.length === 0 ? (
          <p className="text-center">No tienes productos en el carrito.</p>
        ) : (
          <div className="row">
            {/* Resumen del pedido */}
            <div className="col-md-6 mb-4">
              <h4>Resumen del Pedido</h4>
              <ul className="list-group">
                {cart.map((item) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={item.id}
                  >
                    {item.nombre} x {item.qty}
                    <span>${item.precio * item.qty}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  Total
                  <span>${total}</span>
                </li>
              </ul>
            </div>

            {/* Formulario de datos */}
            <div className="col-md-6 mb-4">
              <h4>Datos de Envío</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    name="direccion"
                    value={form.direccion}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Confirmar Pedido
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default CheckoutPage;
