import { useMutation } from "@tanstack/react-query";
import { aiService } from "@/services/ai.service.js";
import { toast } from "sonner";

export const useEnhanceProfessionalSummary = () => {
  return useMutation({
    mutationFn: aiService.enhanceProfessionalSummary,
    onError: (error) => {
      toast.error(error.message || 'Failed to enhance professional summary');
    },
  });
};