// src/services/userService.js
import API from "./api";

// Obtener perfil del usuario
export const obtenerPerfil = async () => {
  try {
    const response = await API.get("/usuarios/perfil");
    return response.data;
  } catch (e) {
    console.error("Error al obtener perfil:", e);
    return null;
  }
};

// Actualizar datos del usuario
export const actualizarPerfil = async (datos) => {
  try {
    const response = await API.put("/usuarios/actualizar", datos);
    return response.data;
  } catch (e) {
    console.error("Error al actualizar perfil:", e);
    return null;
  }
};
