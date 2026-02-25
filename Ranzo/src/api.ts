import axios from "axios";

// Use an environment variable for the API Gateway URL
const BASE_URL = import.meta.env.VITE_API_GATEWAY_URL || "http://localhost:8081";

export const myAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
