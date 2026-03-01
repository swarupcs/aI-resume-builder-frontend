import { useMutation } from '@tanstack/react-query';
import { aiService } from '@/services/ai.service.js';
import { toast } from 'sonner';

export const useEnhanceJobDescription = () => {
  return useMutation({
    mutationFn: aiService.enhanceJobDescription,
    onError: (error) => {
      toast.error(error.message || 'Failed to enhance job description');
    },
  });
};
