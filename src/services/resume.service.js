import { getResumeByIdApi } from "@/api/resume.js";
import handleApiError from "@/lib/handleApiError.js";

export const resumeService = {
  getResumeById: async (resumeId) => {
    try {
      const { data } = await getResumeByIdApi(resumeId);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to fetch resume');
    }
  },
};