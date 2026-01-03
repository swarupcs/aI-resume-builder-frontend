import { toast } from "sonner";
import { signinApi, signupApi } from "../api/auth.js";
import handleApiError from "../lib/handleApiError.js";

export const authService = {
  signup: async (userData) => {
    try {
      const { data } = await signupApi(userData);
      toast.success('Signup successful!');
      return data;
    } catch (error) {
      throw handleApiError(error, 'Signup failed');
    }
  },

  signin: async (userData) => {
    try {
      const { data } = await signinApi(userData);
      return data;
    } catch (error) {
      throw handleApiError(error, 'Signin failed');
    }
  },
};