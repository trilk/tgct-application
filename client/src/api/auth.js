import { axiosInstance } from "../config/axios";

export const authed = () => {
  return axiosInstance.get("/auth");
};

export const login = (userData) => {
  return axiosInstance.post("/auth/login", userData);
};

export const logout = () => {
  // localStorage.removeItem("user");
};

export const register = (userData) => {
  return axiosInstance.post("/auth/register", userData);
};
