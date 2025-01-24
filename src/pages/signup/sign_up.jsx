import React from 'react';
import SignUpForm from '../../features/authentication/sign_up_form';
import styled from 'styled-components';
import Logo from '../../ui/logo.component';

const SignUpWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  /* grid-template-columns: 60rem; */
  align-content: center;
  justify-content: center;
  gap: 3.2rem;

  background: ${({ theme }) => theme.colors.grey[50]};
`;

const Header = styled.h2`
  text-align: center;
`;

function SignUp() {
  return (
    <SignUpWrapper>
      <Logo />
      <Header classNName="header">Sign up for a new account.</Header>
      <SignUpForm />
    </SignUpWrapper>
  );
}

export default SignUp;
