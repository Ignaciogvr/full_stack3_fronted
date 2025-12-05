// src/utils/formatCurrency.js
/**
 * Formatea un número a precio en pesos chilenos.
 * @param {number} valor - Monto a formatear.
 * @returns {string} Precio formateado, ejemplo: $1.200
 */
export const formatoPrecio = (valor) => {
  if (typeof valor !== "number") return "$0";
  return `$${valor.toLocaleString("es-CL")}`;
};
