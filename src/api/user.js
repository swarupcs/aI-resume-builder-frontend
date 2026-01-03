import axiosInstance from "@/config/axiosConfig.js";


export const getUserResumesApi = async () => {
  const res = await axiosInstance.get('/user/resumes');
  console.log("res", res)
  return res.data.data.resumes;
};