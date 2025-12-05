import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api"; // Axios real conectado al backend

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/v1/users/login", {
        email: form.email,
        password: form.password,
      });

      const usuario = response.data;

      // Guardamos el usuario real del backend
      localStorage.setItem("usuario", JSON.stringify(usuario));

      alert(`Bienvenido ${usuario.nombre}!`);

      // Redirección según rol
      if (usuario.rol === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }

    } catch (err) {
      console.error(err);
      alert("❌ Email o contraseña incorrectos");
    }
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <h2 className="text-center fw-bold text-success mb-4">🔑 Iniciar Sesión</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">

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
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Iniciar Sesión
              </button>

            </form>

            <p className="text-center mt-3">
              <a href="/forgot" className="text-success fw-bold">
                ¿Olvidaste tu contraseña?
              </a>
            </p>

            <p className="text-center mt-2">
              ¿No tienes cuenta?{" "}
              <a href="/register" className="text-success">
                Regístrate aquí
              </a>
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LoginPage;
