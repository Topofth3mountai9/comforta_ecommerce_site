import styled from 'styled-components';

const ButtonWithIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: ${({ theme }) => theme.border_radius.sm};
  transition: all 0.2s;

  &:focus {
    outline: ${({ theme }) =>
      `2px solid ${theme.colors.brand_secondary_light[800]}`};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonWithIcon;
