import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const usuarioSimulado = {
  nombre: "Ignacio Núñez",
  email: "ignacio@example.com",
  direccion: "Calle Falsa 123, Santiago, Chile",
  telefono: "+56 9 1234 5678",
  pedidos: [
    { id: 1, fecha: "2025-10-01", total: 4500, estado: "Entregado" },
    { id: 2, fecha: "2025-10-15", total: 3200, estado: "En preparación" },
  ],
};

const ProfilePage = () => {
  return (
    <>
      <Header />

      <section className="container py-5">
        <h2 className="fw-bold text-success mb-4">Perfil de Usuario</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Información Personal</h4>
            <p><strong>Nombre:</strong> {usuarioSimulado.nombre}</p>
            <p><strong>Email:</strong> {usuarioSimulado.email}</p>
            <p><strong>Dirección:</strong> {usuarioSimulado.direccion}</p>
            <p><strong>Teléfono:</strong> {usuarioSimulado.telefono}</p>
            <button className="btn btn-success mt-2">Editar Información</button>
          </div>

          <div className="col-md-6">
            <h4>Mis Pedidos</h4>
            {usuarioSimulado.pedidos.length > 0 ? (
              <ul className="list-group">
                {usuarioSimulado.pedidos.map((pedido) => (
                  <li key={pedido.id} className="list-group-item d-flex justify-content-between align-items-center">
                    Pedido #{pedido.id} - {pedido.fecha}
                    <span className={`badge ${pedido.estado === "Entregado" ? "bg-success" : "bg-warning"} rounded-pill`}>
                      {pedido.estado}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No has realizado pedidos aún.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProfilePage;
