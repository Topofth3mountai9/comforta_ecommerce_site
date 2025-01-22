import { useState } from 'react';

import Form from '../../ui/form';
import Input from '../../ui/Input';

import { useLogin } from './useLogin';
import FormRowVertical from '../../ui/form_row_vertical';
import styled from 'styled-components';
import { useLoginAsync } from './useLoginAsync';
import Loader_mini from '../../ui/loader_mini';

const StyledButton = styled.button`
  border-radius: ${({ theme }) => theme.border_radius.md};
`;

function LoginForm() {
  const [email, setEmail] = useState('somn@protonmail.co');
  const [password, setPassword] = useState('123456789');
  // const { login_mutation, is_logging_in } = useLogin();
  const login_mutation = useLoginAsync();
  // console.log(is_logging_in);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login_mutation.mutate(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={login_mutation.isPending}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={login_mutation.isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        {/* <Button size="large" disabled={isLoading}>
          {!isLoading ? 'Log in' : <Loader_mini />}
        </Button> */}
        <StyledButton className="btn btn-primary btn-lg text_center flex_items align_middle align_horizontal">
          {!login_mutation.isPending ? 'Log in' : <Loader_mini />}
        </StyledButton>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
