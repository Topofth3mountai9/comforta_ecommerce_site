import styled from 'styled-components';

const Container_container = styled.div`
  max-width: ${({ theme }) => theme.containers.max_width};
  margin-inline: auto;
  height: 100%;
`;

function OurContainer({ children, other_class }) {
  return (
    <Container_container className={other_class}>
      {children}
    </Container_container>
  );
}

export default OurContainer;
