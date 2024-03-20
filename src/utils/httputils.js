// httputils.js
import axios from "axios";
import { getToken } from "./loginutils.js";

// Base URL for your API
const baseurl = "http://localhost:8080";

// Create an axios instance
const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the auth token to every request
apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const loginRequest = (loginData) => {
  return apiClient.post("/api/login", loginData);
};

// Export apiClient for other API calls
export default apiClient;
