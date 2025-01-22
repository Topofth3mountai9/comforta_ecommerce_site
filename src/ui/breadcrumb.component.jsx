import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OurContainer from '../components/OurContainer.component';

const BreadCrumbContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  height: 10vh;
  display: flex;
  justify-content: start;
  align-items: center;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]}; */
  font-size: ${({ theme }) => theme.typography.text.tiny} !important;

  ul li:last-child {
    /* margin-left: -1.5rem; */
  }

  a {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  svg {
    color: ${({ theme }) => theme.colors.grey[300]};
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const BreadCrumbContent = styled.div`
  max-width: ${({ theme }) => theme.containers.max_width_sm};
  width: 73%;
  margin-inline: auto;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
`;

function Breadcrumb({ current_page, svg }) {
  return (
    <BreadCrumbContainer
      className="breadcrumbs bg-slate-100 text_tiny"
      data-theme="furniture"
    >
      <BreadCrumbContent>
        {current_page === 'home' ? (
          <ul className="flex_items align_middle align_horizonta g_1">
            <li>
              <StyledLink to="/" className="text-primary">
                Home
              </StyledLink>
            </li>{' '}
          </ul>
        ) : (
          <ul className="flex_items align_middle align_horizonta g_1">
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            {svg}
            <li>
              <StyledLink
                to={`/${current_page}`}
                className="flex_items align_middle align_horizontal"
              >
                {' '}
                <span>{current_page}</span>
              </StyledLink>
            </li>
          </ul>
        )}
      </BreadCrumbContent>
    </BreadCrumbContainer>
  );
}

export default Breadcrumb;
