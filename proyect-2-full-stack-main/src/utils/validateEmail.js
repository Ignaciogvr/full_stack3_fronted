// src/utils/validateEmail.js
/**
 * Valida si un correo electrónico tiene formato correcto.
 * @param {string} email - Correo a validar.
 * @returns {boolean} true si es válido, false si no.
 */
export const validateEmail = (email) => {
  if (typeof email !== "string") return false;
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};
