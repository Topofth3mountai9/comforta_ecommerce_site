import styled from 'styled-components';
import { theme } from '../styles/theme';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.unknown_colors.color_warning};
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && (
        <Label
          htmlFor={children.props.id}
          className={`text-[${theme.colors.black.dark}]`}
        >
          {label}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
