import axios from "axios";

const instance = axios.create({
  baseURL: "https://twiggapp.onrender.com",
  withCredentials: true,
  timeout: 10000,
  delayed: true,
});

instance.interceptors.request.use(
  (config) => {
    if (config.delayed) {
      return new Promise((resolve) => setTimeout(() => resolve(config), 1000));
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
