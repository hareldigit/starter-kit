import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response?.data?.message || 'An error occurred');
  }
);
