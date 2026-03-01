import {
  getResumeByIdApi,
  getPublicResumeByIdApi,
  createResumeApi,
  updateResumeApi,
  deleteResumeApi,
} from '@/api/resume.js';
import handleApiError from '@/lib/handleApiError.js';

export const resumeService = {
  getResumeById: async (resumeId) => {
    try {
      const { data } = await getResumeByIdApi(resumeId);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to fetch resume');
    }
  },

  getPublicResumeById: async (resumeId) => {
    try {
      const { data } = await getPublicResumeByIdApi(resumeId);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to fetch public resume');
    }
  },

  createResume: async (title) => {
    try {
      const { data } = await createResumeApi({ title });
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to create resume');
    }
  },

  updateResume: async ({ resumeId, resumeData, image, removeBackground }) => {
    try {
      const formData = new FormData();
      formData.append('resumeId', resumeId);
      formData.append('resumeData', JSON.stringify(resumeData));
      if (image) formData.append('image', image);
      if (removeBackground) formData.append('removeBackground', 'true');

      const { data } = await updateResumeApi(formData);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to update resume');
    }
  },

  deleteResume: async (resumeId) => {
    try {
      const { data } = await deleteResumeApi(resumeId);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Failed to delete resume');
    }
  },
};
