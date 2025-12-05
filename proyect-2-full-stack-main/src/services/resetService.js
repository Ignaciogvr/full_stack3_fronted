// src/services/resetService.js
import API from "./api";

// Enviar código de recuperación
export const enviarCodigo = async (email) => {
  try {
    const response = await API.post("/auth/forgot-password", { email });
    return response.data;
  } catch (e) {
    console.error("Error al enviar código:", e);
    return null;
  }
};

// Verificar código y actualizar contraseña
export const cambiarPassword = async (email, nuevaPassword, codigo) => {
  try {
    const response = await API.post("/auth/reset-password", {
      email,
      nuevaPassword,
      codigo,
    });
    return response.data;
  } catch (e) {
    console.error("Error al cambiar contraseña:", e);
    return null;
  }
};
