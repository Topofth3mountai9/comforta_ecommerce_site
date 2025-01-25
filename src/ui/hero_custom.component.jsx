import React from 'react';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: ${(props) => props.height || '500px'};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding-block: 2rem;

  ${respond_to('900')} {
    /* min-height: 80vh; */
    min-height: auto;
  }
  ${respond_to('600')} {
    /* min-height: 70vh; */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, ${(props) => props.opacity || 0.5});
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* padding: 0 20px; */
  padding-inline: 8rem;
  display: flex;
  justify-content: ${(props) => {
    if (props.position === 'left') return 'flex-start';
    if (props.position === 'right') return 'flex-end';
    return 'center';
  }};

  ${respond_to('450')} {
    justify-content: center;
  }
`;

const Content = styled.div`
  max-width: 600px;
  color: white;
`;

export function Hero_custom({
  children,
  backgroundImage,
  height,
  overlayOpacity,
}) {
  return (
    <HeroWrapper backgroundImage={backgroundImage} height={height}>
      <Overlay opacity={overlayOpacity} />
      {children}
    </HeroWrapper>
  );
}

Hero_custom.Content = function HeroContent({ children, position }) {
  return (
    <ContentWrapper position={position}>
      <Content>{children}</Content>
    </ContentWrapper>
  );
};

Hero_custom.Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

Hero_custom.Subtitle = styled.h4`
  /* font-size: 1.5rem; */
  margin-bottom: 1rem;
`;

Hero_custom.Paragraph = styled.p`
  /* font-size: 1rem; */
  font-size: ${({ theme }) => theme.typography.text.xs};
  color: ${({ theme }) => theme.colors.grey[400]};
  margin-bottom: 1rem;
  margin-top: -0.8rem;
`;

Hero_custom.CTA = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

// Additional components for flexibility
Hero_custom.Grid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
  grid-template-columns: 1fr;
  gap: 3rem;
`;

Hero_custom.Card = styled.div`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background: transparent;
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

Hero_custom.Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  svg {
    color: ${({ theme }) => theme.colors.accent};
    width: 4rem;
    height: 4rem;
  }
`;
