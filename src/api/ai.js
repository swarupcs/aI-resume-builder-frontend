import axiosInstance from "@/config/axiosConfig.js";

export const enhanceProfessionalSummaryApi = (userContent) =>
  axiosInstance.post('/ai/enhance-pro-sum', { userContent });

export const enhanceJobDescriptionApi = (userContent) =>
  axiosInstance.post('/ai/enhance-job-desc', { userContent });

export const uploadResumeApi = (data) =>
  axiosInstance.post('/ai/upload-resume', data);