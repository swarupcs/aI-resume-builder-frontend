import { useQuery } from '@tanstack/react-query';
import { resumeService } from '@/services/resume.service.js';

export const usePublicResumeById = (resumeId) => {
  return useQuery({
    queryKey: ['resume', 'public', resumeId],
    queryFn: () => resumeService.getPublicResumeById(resumeId),
    enabled: !!resumeId,
    staleTime: 1000 * 60 * 5,
  });
};
