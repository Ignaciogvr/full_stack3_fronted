import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Si no hay usuario → redirige a login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario NO es admin → redirige al inicio
  if (usuario.rol !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Si es admin → permitir acceso
  return children;
};

export default ProtectedAdmin;
