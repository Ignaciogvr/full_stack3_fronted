import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StatisticsPage = () => {
  // Datos simulados, luego se podrían traer desde un backend
  const stats = {
    totalVentas: 124,
    productosVendidos: 342,
    clientesRegistrados: 89,
    productosDestacados: 5,
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <h2 className="text-center fw-bold text-success mb-5">📊 Estadísticas de HuertoHogar</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm p-4">
              <h3 className="fw-bold text-success">{stats.totalVentas}</h3>
              <p>Total de ventas</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm p-4">
              <h3 className="fw-bold text-success">{stats.productosVendidos}</h3>
              <p>Productos vendidos</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm p-4">
              <h3 className="fw-bold text-success">{stats.clientesRegistrados}</h3>
              <p>Clientes registrados</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm p-4">
              <h3 className="fw-bold text-success">{stats.productosDestacados}</h3>
              <p>Productos destacados</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default StatisticsPage;
