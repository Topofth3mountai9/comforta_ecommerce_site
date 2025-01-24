import { useMutation } from '@tanstack/react-query';
import { signup } from '../../services/api_auth';
import toast from 'react-hot-toast';

export function useSignUp() {
  const {
    mutate: sign_up_mutation,
    isPending: is_signing_up_,
    isLoading: is_signing_up,
  } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success(
        'Account successfully created! Please Verify the new account from your email address.'
      );
    },
  });
  return { sign_up_mutation, is_signing_up };
}
