import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resumeService } from '@/services/resume.service.js';
import { toast } from 'sonner';

export const useUpdateResume = (resumeId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resumeService.updateResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resume', resumeId] });
      toast.success('Resume saved successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to save resume');
    },
  });
};
