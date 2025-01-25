import styled from 'styled-components';

const Input = styled.input`
  /* border: 1px solid var(--color-grey-300); */
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey[300]}`};
  background-color: ${({ theme }) => theme.colors.grey[0]};
  border-radius: ${({ theme }) => theme.border_radius.md};
  padding: 0.8rem 1.2rem;
  box-shadow: ${({ theme }) => theme.box_shadows.sm};

  &::placeholder {
    color: ${({ theme }) => theme.colors.brand_secondary_light[200]};
  }
`;

export default Input;
