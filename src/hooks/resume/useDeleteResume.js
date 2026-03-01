import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resumeService } from '@/services/resume.service.js';
import { toast } from 'sonner';

export const useDeleteResume = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resumeService.deleteResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userResume'] });
      toast.success('Resume deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete resume');
    },
  });
};
