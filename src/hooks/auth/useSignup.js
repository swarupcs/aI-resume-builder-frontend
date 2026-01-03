import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';

export const useSignup = () =>
  useMutation({
    mutationFn: authService.signup,
  });
