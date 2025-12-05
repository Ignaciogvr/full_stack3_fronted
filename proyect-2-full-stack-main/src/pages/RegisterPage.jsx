// src/pages/RegisterPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirm: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some(u => u.email === form.email.toLowerCase())) {
      alert("❌ Ese correo ya está registrado");
      return;
    }

    const nuevo = {
      nombre: form.nombre,
      email: form.email.toLowerCase(),
      password: form.password,
      rol: "usuario"
    };

    usuarios.push(nuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuario", JSON.stringify(nuevo));

    alert("✅ Registro exitoso!");
    navigate("/");
  };

  return (
    <>
      <Header />

      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="text-center text-success fw-bold mb-4">Crear Cuenta</h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input
                      name="nombre"
                      className="form-control"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input
                      type="password"
                      name="confirm"
                      className="form-control"
                      value={form.confirm}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button className="btn btn-success w-100">Registrarse</button>
                </form>

                <p className="text-center mt-3">
                  ¿Ya tienes cuenta? <a href="/login" className="text-success">Iniciar sesión</a>
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

export default RegisterPage;
