import { useMutation, useQueryClient } from '@tanstack/react-query';
import { resumeService } from '@/services/resume.service.js';
import { toast } from 'sonner';

export const useUpdateResumeTitle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, title }) => resumeService.updateResumeTitle(id, title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userResume'] });
      toast.success('Title updated successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update title');
    },
  });
};
