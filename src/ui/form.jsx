import styled, { css } from 'styled-components';
import { respond_to } from '../helpers/breakpoints';

const Form = styled.form`
  ${(props) =>
    props.type === 'regular' &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: ${({ theme }) => theme.colors.grey[0]};
      border: ${({ theme }) => `.1rem solid ${theme.colors.grey[100]}`};
      border-radius: ${({ theme }) => theme.border_radius.md};
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  ${respond_to('450')} {
    width: 40rem;
    margin-inline: auto;
  }
`;

Form.defaultProps = {
  type: 'regular',
};

export default Form;
