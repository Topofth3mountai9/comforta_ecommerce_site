import React from 'react';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';

const TagContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  /* font-size: ${({ theme }) => theme.typography.text.xs}; */
  font-size: ${({ theme }) => theme.typography.text.tiny};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  letter-spacing: 0.15rem;
  text-transform: uppercase;

  ${respond_to('485')} {
  }
`;

function Tag({ children, other_class }) {
  return <TagContainer className={`${other_class}`}>{children}</TagContainer>;
}

export default Tag;
