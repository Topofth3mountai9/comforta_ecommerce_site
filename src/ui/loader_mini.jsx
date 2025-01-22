import styled, { keyframes } from 'styled-components';
import { BiLoaderAlt } from 'react-icons/bi';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Loader_mini = styled(BiLoaderAlt)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default Loader_mini;
