import axios from 'axios';


// Create a new instance of axios
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

// Define the API endpoints