import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';

export const useSignin = () =>
  useMutation({
    mutationFn: authService.signin,
  });
