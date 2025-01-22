import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Loader = styled.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;

  background: radial-gradient(farthest-side, #f99f55 94%, #000) top/10px 10px
      no-repeat,
    conic-gradient(#000 30%, #f99f55);

  // background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
  //     top/10px 10px no-repeat,
  //   conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

// const Loader = styled.div`
//   border: 16px solid ${theme.colors.grey[200]}; /* Light grey */
//   border-top: 16px solid ${theme.colors.secondary}; /* Blue */
//   border-radius: 50%;
//   width: 120px;
//   height: 120px;
//   /* animation: spin 2s linear infinite; */
//   margin: auto;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   position: fixed;
//   animation: ${rotate} 1.5s infinite linear;
// `;
export default Loader;
