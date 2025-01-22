import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNotFoundContainer = styled.div`
  width: 100%;
  height: calc(100vh - 30rem);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  h2 {
    font-size: ${({ theme }) => theme.typography.heading.title} !important;
  }

  p {
    color: ${({ theme }) => theme.colors.black.base} !important;
    font-size: ${({ theme }) => theme.typography.heading.two} !important;
    width: 70%;
  }

  span {
    margin-top: -3rem;
    color: ${({ theme }) => theme.colors.grey[500]} !important;
  }
`;

const StyledButton = styled.button``;

function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <h2 className="text-primary heading_one">404</h2>
      <p className="text-center ">Page not found.</p>
      <span>sorry, we couldn't find the page you are looking for.</span>
      <Link
        to="/"
        className="btn btn-primary rounded-md flex_items align_middle align_horizontal"
      >
        Go to Home
      </Link>
    </PageNotFoundContainer>
  );
}

export default PageNotFound;
