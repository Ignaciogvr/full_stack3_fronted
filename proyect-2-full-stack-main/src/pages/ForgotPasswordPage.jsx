// src/pages/ForgotPasswordPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleRecover = (e) => {
    e.preventDefault();
    const usuariosLS = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuariosLS.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      alert("❌ Usuario no encontrado");
      return;
    }

    localStorage.setItem("emailRecuperar", email);
    alert("📧 Código de recuperación enviado (simulado)");
    window.location.href = "/reset-password"; 
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="text-center text-success fw-bold mb-4">Recuperar Contraseña</h2>
                <form onSubmit={handleRecover}>
                  <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="ejemplo@correo.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100 mt-3">
                    Enviar Código
                  </button>
                </form>
                <p className="text-center mt-3">
                  <a href="/login" className="text-success fw-bold">Volver al inicio de sesión</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ForgotPasswordPage;
