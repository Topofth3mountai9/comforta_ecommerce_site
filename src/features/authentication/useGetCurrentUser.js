import { useQuery } from '@tanstack/react-query';
import { get_current_user } from '../../services/api_auth';

export function useGetCurrentUser() {
  const {
    data: user,
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ['current_user'],
    queryFn: get_current_user,
  });

  return {
    user,
    isLoading,
    isPending,
    is_authenticated: user?.role == 'authenticated',
  };
}
