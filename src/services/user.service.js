import { getUserResumesApi } from "@/api/user.js";
import handleApiError from "@/lib/handleApiError.js";


export const userService = {
  getUserResumes: async () => {
    try {
      return await getUserResumesApi(); // ✅ already clean
    } catch (error) {
      throw handleApiError(error, 'Failed to get user resumes');
    }
  },
};