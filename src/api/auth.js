import axiosInstance from "../config/axiosConfig.js";


export const signupApi = (userData) => axiosInstance.post('/auth/signup', userData);

export const signinApi = (userData) => axiosInstance.post('/auth/signin', userData);
