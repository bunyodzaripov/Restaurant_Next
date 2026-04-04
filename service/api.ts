import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Global API Error:", error.message);

    return Promise.resolve({
      data: [],
      status: error.response?.status || 500,
      statusText: "Error handled by interceptor",
    });
  },
);

export default api;
