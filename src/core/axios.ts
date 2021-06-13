import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers['token'] = localStorage.getItem('token');
  return config;
})

export { axios }
