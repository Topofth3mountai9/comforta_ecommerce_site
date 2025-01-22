import React, { useEffect } from 'react';
import { useGetCurrentUser } from '../features/authentication/useGetCurrentUser';
import { useNavigate } from 'react-router-dom';
import Loader from '../ui/Loader';
import styled from 'styled-components';

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.grey[50]};
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //we will only return the children if the user is authenticated
  //1. Load the authenticated user
  const get_current_user_query = useGetCurrentUser();
  const {
    user,
    isLoading: is_loading,
    isPending,
    is_authenticated,
  } = useGetCurrentUser();

  console.log(get_current_user_query);
  // get_current_user_query?.data?.role;
  // let is_loading = get_current_user_query.isPending;
  // let is_authenticated = get_current_user_query.role === 'authenticated';
  //2. If there isn't an authenticated user , redirect to the login page

  useEffect(() => {
    function helper() {
      if (!is_authenticated && !is_loading) {
        navigate('/login');
      }
    }
    helper();
  }, [is_authenticated, is_loading]);

  //3. Show a loader
  if (is_loading)
    return (
      <FullPage>
        <Loader />
      </FullPage>
    );

  //4. if there is a user render the checkout page/app
  if (is_authenticated) return children;
  // return children;
}

export default ProtectedRoute;
