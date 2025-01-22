import { Sofa } from 'lucide-react';
import React from 'react';
import { FaCouch } from 'react-icons/fa6';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.4rem;

  .logo_text {
    margin-top: -1.6rem;
    letter-spacing: 0.2rem;
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-family: ${({ theme }) => theme.typography.fonts.secondary};
    text-transform: uppercase;
  }
`;
const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};

  svg {
    fill: ${({ theme }) => theme.colors.brand[1000]};
    width: 6rem;
    height: 6rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function Logo({ color, fill, logo_text = 'furniture' }) {
  return (
    <LogoWrapper>
      <SvgWrapper color={color} fill={fill}>
        {/* <Sofa /> */}
        <FaCouch />
      </SvgWrapper>
      <span className="logo_text text_tiny">{logo_text}</span>
    </LogoWrapper>
  );
}

export default Logo;
