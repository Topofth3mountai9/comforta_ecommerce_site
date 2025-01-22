import React from 'react';
import styled from 'styled-components';
import LoginForm from '../features/authentication/login_form';
import Logo from '../ui/logo.component';

const LoginWrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background: ${({ theme }) => theme.colors.grey[50]};

  .header {
    text-align: center;
  }
`;

function Login() {
  return (
    <LoginWrapper>
      <Logo />
      <h2 className="header">Log in to your account</h2>
      <LoginForm />
    </LoginWrapper>
  );
}

export default Login;
