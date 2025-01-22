import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login } from '../../services/api_auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const query_client = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login_mutation, isLoading: is_logging_in } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      query_client.setQueryData(['user'], user.user);
      navigate('/checkout', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password is incorrect!');
    },
  });

  return { login_mutation, is_logging_in };
}
