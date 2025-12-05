// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Header = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: "#2E8B57" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">
          <img
            src="/img/logo/logohuerto.jpg"
            alt="HuertoHogar"
            className="me-2 rounded-circle"
            style={{ height: "60px" }}
          />
          HuertoHogar
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catálogo</Link>
            </li>

            {/* ✔ RUTA CORRECTA */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">Nosotros</Link>
            </li>

            {!usuario ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
                <li className="nav-item ms-2">
                  <Link className="btn btn-light text-success fw-bold" to="/register">Registrarse</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/perfil">Perfil</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/carrito">Carrito</Link></li>
                
                {usuario.rol === "admin" && (
                  <li className="nav-item"><Link className="nav-link" to="/estadisticas">Estadísticas</Link></li>
                )}

                <li className="nav-item ms-2">
                  <button
                    className="btn btn-light text-success fw-bold"
                    onClick={() => {
                      localStorage.removeItem("usuario");
                      window.location.reload();
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
