import React from 'react';
import styled from 'styled-components';

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  margin-top: 3rem;
`;

function Empty({ resource_name }) {
  return (
    <EmptyWrapper>
      <h5>Sorry, no {resource_name} products matched your search!</h5>
    </EmptyWrapper>
  );
}

export default Empty;
