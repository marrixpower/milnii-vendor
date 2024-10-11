import axios from "axios";
import { Service } from "features/index";

const baseURL = import.meta.env.VITE_BASE_URL;

const privateInstance = axios.create({
  baseURL,
});

privateInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await Service.Firebase.getToken();

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

privateInstance.interceptors.response.use(
  async (config) => {
    try {
      return config;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

export const apiPrivate = privateInstance;
