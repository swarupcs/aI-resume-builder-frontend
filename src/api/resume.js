import axiosInstance from "@/config/axiosConfig.js";

export const getResumeByIdApi = (resumeId) => 
  axiosInstance.get(`/resume/${resumeId}`);