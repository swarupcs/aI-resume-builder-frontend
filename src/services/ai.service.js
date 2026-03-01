import {
  enhanceProfessionalSummaryApi,
  enhanceJobDescriptionApi,
  uploadResumeApi,
} from "@/api/ai.js";
import handleApiError from "@/lib/handleApiError.js";

export const aiService = {
  enhanceProfessionalSummary: async (userContent) => {
    try {
      const { data } = await enhanceProfessionalSummaryApi(userContent);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to enhance professional summary');
    }
  },

  enhanceJobDescription: async (userContent) => {
    try {
      const { data } = await enhanceJobDescriptionApi(userContent);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to enhance job description');
    }
  },

  uploadResume: async ({ resumeText, title }) => {
    try {
      const { data } = await uploadResumeApi({ resumeText, title });
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to upload resume');
    }
  },
};