// useSignup.js
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { authService } from '@/services/auth.service';
import { setCredentials } from '@/features/authSlice.js';


export const useSignup = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: authService.signup,
    onSuccess: (data) => {
      dispatch(setCredentials(data));
    },
  });
};
