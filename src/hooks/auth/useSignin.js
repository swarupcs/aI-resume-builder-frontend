// useSignin.js
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { authService } from '@/services/auth.service';
import { setCredentials } from '@/features/authSlice.js';


export const useSignin = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: authService.signin,
    onSuccess: (data) => {
      dispatch(setCredentials(data));
    },
  });
};
