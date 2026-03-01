import { useMutation, useQueryClient } from '@tanstack/react-query';
import { aiService } from '@/services/ai.service.js';
import { toast } from 'sonner';

export const useUploadResume = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: aiService.uploadResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userResume'] });
      toast.success('Resume uploaded successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to upload resume');
    },
  });
};
