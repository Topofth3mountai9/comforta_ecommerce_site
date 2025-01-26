import React from 'react';
import styled, { css } from 'styled-components';

const Bar = styled.div`
  height: 0.3rem;
  width: 3rem;
  background: ${({ theme }) => theme.colors.brand_secondary_dark[50]};
  transition: transform 0.3s;
`;

const HamburgerContainer = styled.div`
  gap: 0.8rem;
  margin-left: auto;
  ${({ is_sidebar_open }) =>
    is_sidebar_open &&
    `
     .line_1 {
        transform: rotateZ(45deg) translate(0.7rem, -0.1rem);
      }
      .line_2 {
        transform: rotateZ(-45deg) translate(0.7rem, -0.1rem);
      }
  `}
`;

function Hamburger({ is_sidebar_open }) {
  // const { is_nav_open } = useNavContext();
  console.log(is_sidebar_open);
  return (
    <HamburgerContainer
      className="flex_items flex_column align_middle"
      is_sidebar_open={is_sidebar_open}
    >
      <Bar className="line_1" />
      <Bar className="line_2" />
    </HamburgerContainer>
  );
}

export default Hamburger;
