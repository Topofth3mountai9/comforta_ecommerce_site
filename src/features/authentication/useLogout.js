import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../../services/api_auth';
import { Navigate, useNavigate } from 'react-router-dom';

export function useLogout() {
  const query_client = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      query_client.removeQueries(['user']);
      navigate('/login', { replace: true });
    },
  });

  const {
    mutate: logout_fn,
    isPending,
    isLoading,
  } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      query_client.removeQueries(['user']);
      navigate('/login', { replace: true });
    },
  });

  return { logout_fn, isPending };
}
