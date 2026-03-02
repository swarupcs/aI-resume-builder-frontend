import { useMutation } from '@tanstack/react-query';
import { resumeService } from '@/services/resume.service.js';
import { toast } from 'sonner';

export const useExportResumePdf = () => {
  return useMutation({
    mutationFn: ({ resumeId, fullName }) =>
      resumeService.exportResumePdf(resumeId, fullName),
    onMutate: () => {
      toast.loading('Generating PDF...', { id: 'pdf-export' });
    },
    onSuccess: () => {
      toast.success('PDF downloaded successfully!', { id: 'pdf-export' });
    },
    onError: (error) => {
      console.error('PDF export error:', error);
      toast.error('Failed to generate PDF. Try again.', { id: 'pdf-export' });
    },
  });
};
