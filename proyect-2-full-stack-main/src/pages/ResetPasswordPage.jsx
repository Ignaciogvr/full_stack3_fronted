// src/pages/ResetPasswordPage.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ResetPasswordPage = () => {
  const [codigo, setCodigo] = useState("");
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [emailRecuperar, setEmailRecuperar] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("emailRecuperar");
    if (!email) {
      alert("❌ No hay solicitud de recuperación activa");
      window.location.href = "/login";
    }
    setEmailRecuperar(email);
  }, []);

  const handleReset = (e) => {
    e.preventDefault();

    if (codigo !== "111111") {
      alert("❌ Código incorrecto");
      return;
    }

    if (nueva !== confirmar) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    const usuariosLS = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuariosLS.find(u => u.email.toLowerCase() === emailRecuperar.toLowerCase());

    if (user) {
      user.password = nueva;
      localStorage.setItem("usuarios", JSON.stringify(usuariosLS));
      localStorage.removeItem("emailRecuperar");

      alert("✅ Contraseña actualizada. Ahora puedes iniciar sesión.");
      window.location.href = "/login";
    } else {
      alert("❌ Error. Usuario no encontrado.");
    }
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="text-center text-success fw-bold mb-4">Cambiar Contraseña</h2>
                <form onSubmit={handleReset}>
                  <div className="mb-3">
                    <label className="form-label">Código recibido</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingresa el código"
                      required
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Nueva Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      value={nueva}
                      onChange={(e) => setNueva(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      value={confirmar}
                      onChange={(e) => setConfirmar(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100 mt-3">
                    Actualizar Contraseña
                  </button>
                </form>

                <p className="text-center mt-3">
                  <a href="/login" className="text-success fw-bold">Volver a Iniciar Sesión</a>
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

export default ResetPasswordPage;
