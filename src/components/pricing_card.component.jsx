import { Star } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const PricingCardWrapper = styled.div`
  width: 30rem;
  height: 45rem;
  background-color: #f7f7f7;
  margin: 1rem;
  border-radius: ${({ theme }) => theme.border_radius.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  cursor: pointer;
  position: relative;

  &:hover {
    svg {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 20rem;
  height: 18rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
`;

// const CardHeader = styled.div`
//   padding: 16px;
// `;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StarIcon = styled(Star)`
  width: 16px;
  height: 16px;
  margin-right: 2px;
  fill: ${(props) => (props.filled ? '#FFD700' : '#E0E0E0')};
  color: ${(props) => (props.filled ? '#FFD700' : '#E0E0E0')};
`;

const PriceWrapper = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.fonts.money};
`;

const PricingCardICons = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.3rem;
    background-color: ${({ theme }) => theme.colors.grey[0]};
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    /* color: #073e72; */
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0;
    visibility: hidden;
    transform: translateY(2rem);
    transition: all 0.3s;
  }
`;

function PricingCard({ children, ...props }) {
  return <PricingCardWrapper>{children}</PricingCardWrapper>;
}

function Image({ src, alt }) {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
}

function Name({ name }) {
  return <CardTitle>{name}</CardTitle>;
}

function Rating({ rating }) {
  return (
    <RatingWrapper>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </RatingWrapper>
  );
}

function Price({ price }) {
  return <PriceWrapper>{price}</PriceWrapper>;
}

function Icons({ icons }) {
  const card_icon_elements = icons.map((icon, index) => icon);
  return <PricingCardICons>{card_icon_elements}</PricingCardICons>;
}

PricingCard.Image = Image;
PricingCard.Name = Name;
PricingCard.Rating = Rating;
PricingCard.Price = Price;
PricingCard.Icons = Icons;

export default PricingCard;
