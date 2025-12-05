import API from "./api";

export const login = async (email, password) => {
  const data = { email, password };

  const res = await API.post("/api/v1/users/login", data);
  return res.data;
};
