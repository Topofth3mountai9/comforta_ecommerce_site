import styled from 'styled-components';

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  margin-bottom: 10rem;

  @media all and (min-width: 1250px) {
    /* margin-bottom: 18rem; */
  }

  @media all and (max-width: 1200px) {
    /* min-height: 100vh; */
    /* margin-bottom: 28rem; */

    /* min-height: auto; */
  }
  @media all and (max-width: 900px) {
    /* min-height: 100vh; */
    /* margin-bottom: 20rem; */

    /* min-height: auto; */
  }
  @media all and (max-width: 600px) {
    min-height: 90vh;
    /* margin-bottom: 16rem; */

    /* min-height: auto; */
  }
  @media all and (max-width: 450px) {
    /* height: 60vh; */
    /* min-height: 52vh; */
    /* min-height: 80vh; */
    min-height: 65vh;
    margin-bottom: 22rem;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 65rem;
  background: ${({ background_color }) => background_color || '#0b3954'};
  border-radius: 3rem;
`;

const BannerContainer = styled.div`
  width: 60%;
  height: 65rem;
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-radius: 3rem;

  @media (max-width: 1600px) {
    width: 70%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3rem;
  opacity: 0.8;
`;

const BannerContent = styled.div`
  position: absolute;
  /* top: 10rem; */
  top: 4rem;
  right: 5rem;
  width: 40%;
  text-align: right;

  @media (max-width: 600px) {
    width: 30rem;
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  line-height: 1;
  color: #fff;
  text-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.8);
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    font-size: 6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

const Button = styled.button`
  width: 18rem;
  height: 4rem;
  border: none;
  border-radius: 3rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 600px) {
    width: 15rem;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #f8872b;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #f8872b;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #fff;
  color: #f8872b;

  &:hover {
    background-color: #f8872b;
    color: #fff;
  }
`;

const Hero_with_bg_overlay = ({
  backgroundImage,
  title,
  subtitle,
  paragraph,
  background_color,
  primary_button_text,
  secondary_button_text,
  on_primary_click,
  on_secondary_click,
}) => {
  return (
    <HeroSection className="mb_9">
      <HeroBackground background_color={background_color} />
      <BannerContainer>
        <BannerImage src={backgroundImage} alt={title} />
        <BannerContent>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {paragraph && <Paragraph>{paragraph}</Paragraph>}
          <ButtonContainer>
            {primary_button_text && (
              <PrimaryButton onClick={on_primary_click}>
                {primary_button_text}
              </PrimaryButton>
            )}
            {secondary_button_text && (
              <SecondaryButton onClick={on_secondary_click}>
                {secondary_button_text}
              </SecondaryButton>
            )}
          </ButtonContainer>
        </BannerContent>
      </BannerContainer>
    </HeroSection>
  );
};

export default Hero_with_bg_overlay;
