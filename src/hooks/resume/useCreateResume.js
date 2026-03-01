import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resumeService } from '@/services/resume.service.js';
import { toast } from 'sonner';

export const useCreateResume = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resumeService.createResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userResume'] });
      toast.success('Resume created successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create resume');
    },
  });
};
