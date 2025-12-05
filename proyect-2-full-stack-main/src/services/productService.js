import api from "./api";

export const getProductos = async () => {
  const res = await api.get("/products");
  return res.data;
};

export const getProductoPorId = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
