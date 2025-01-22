import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 0.3em;
  /* margin-inline: auto; */
  margin-inline: ${({ center }) => (center ? 'auto' : 'none')};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    // margin-bottom: 2.4rem;
  }
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export function Form_row({ children, other_class, center = false }) {
  return (
    <StyledFormRow className={`styled_form_row ${other_class}`} center={center}>
      {children}
    </StyledFormRow>
  );
}
