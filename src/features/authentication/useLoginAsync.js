import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api_auth';
import toast from 'react-hot-toast';

export function useLoginAsync() {
  const query_client = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      query_client.setQueryData(['user'], user.user);
      navigate('/checkout', { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error('Provided email or password is incorrect!');
    },
  });
}
