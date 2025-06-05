import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://moffmo-1.onrender.com', // http://localhost:3000/api
    withCredentials: true,
})