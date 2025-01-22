import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div;

function DaisyUiButton({ children }) {
  return <StyledButton className="btn btn-ghost">{children}</StyledButton>;
}

export default DaisyUiButton;
