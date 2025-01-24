import React, { createContext, useContext } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { respond_to } from '../helpers/breakpoints';

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroContext = createContext();

const HeroContainer = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${respond_to('450')} {
    height: 50vh;
  }
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
    url(${({ bgImage }) => bgImage}) center center/cover;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey[0]};
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Main Hero component
function Hero_vanilla({
  children,
  slides = [],
  autoplay = true,
  loop = true,
  pagination = true,
}) {
  const contextValue = {
    slides,
  };

  return (
    <HeroContext.Provider value={contextValue}>
      <HeroContainer>
        {slides.length > 0 ? (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={autoplay ? { delay: 500000000000 } : false}
            loop={loop}
            pagination={pagination ? { clickable: true } : false}
            style={{ width: '100%', height: '100%' }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id || index}>
                <SlideContainer bgImage={slide.image}>
                  <ContentWrapper>{children}</ContentWrapper>
                </SlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <SlideContainer>
            <ContentWrapper>{children}</ContentWrapper>
          </SlideContainer>
        )}
      </HeroContainer>
    </HeroContext.Provider>
  );
}

// Sub-components
const TextWrapper = styled.div`
  font-size: ${({ theme }) => theme.typography.heading.one};
  color: ${({ theme }) => theme.colors.grey[0]};
  font-weight: 500;
  max-width: 50%;
  text-align: center;
  /* margin-top: ${({ marginTop }) => marginTop || '24rem'}; */
  margin-top: ${({ marginTop }) => marginTop || '0rem'};

  ${respond_to('600')} {
    max-width: 80%;
  }
`;

const Welcome = styled.h2`
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 400;
`;

const Subtitle = styled.p`
  margin-block: 3rem 2.5rem;
  max-width: 70%;
  margin-inline: auto;
  font-size: ${({ theme }) => theme.typography.text.tiny};
`;

Hero_vanilla.Text = function HeroText({ children, marginTop }) {
  return <TextWrapper marginTop={marginTop}>{children}</TextWrapper>;
};

Hero_vanilla.Welcome = function HeroWelcome({ children }) {
  return <Welcome className="text_primary">{children}</Welcome>;
};

Hero_vanilla.Title = function HeroTitle({ children }) {
  return <Title>{children}</Title>;
};

Hero_vanilla.Subtitle = function HeroSubtitle({ children }) {
  return <Subtitle className="text_tiny">{children}</Subtitle>;
};

Hero_vanilla.Content = function HeroContent({ children, style }) {
  return (
    <div style={{ position: 'relative', zIndex: 2, ...style }}>{children}</div>
  );
};

export default Hero_vanilla;
