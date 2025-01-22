import { Star } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 30rem;
  height: 40rem;
  padding: 3rem;
  margin: 1rem;
  background: #ddd;
  border-radius: ${({ theme }) => theme.border_radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.box_shadows.lg};
  cursor: pointer;
  position: relative;

  &:hover {
    .svg_wrapper {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const DiscountWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 2rem;
  width: 2rem;
  border-radius: ${({ theme }) => theme.border_radius.md};
  color: ${({ theme }) => theme.colors.grey[0]};
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  width: 20rem;
  height: 18rem;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 0.8rem;

  /* .stars {
    svg {
      width: 1.5rem;
      height: 1.5rem;
      } */
  /* } */

  num_of_reviews {
    color: ${({ theme }) => theme.colors.grey[400]};
    font-size: ${({ theme }) => theme.typography.text.xxs};
  }
`;
const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
`;

const StarIcon = styled(Star)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 2px;
  fill: ${(props) => (props.filled ? '#FFD700' : '#E0E0E0')};
  color: ${(props) => (props.filled ? '#FFD700' : '#E0E0E0')};
`;

const SvgWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grey[0]};
  border-radius: 50%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0;
  visibility: hidden;
  transform: translateY(2rem);
  transition: all 0.3s;
`;

const PricingCardICons = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 1.2rem;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: #073e72; */
  }
`;

const PriceWrapper = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`;

function CatalogProductCard({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

function DiscountTag({ discount_percentage }) {
  return <DiscountWrapper>{discount_percentage}</DiscountWrapper>;
}

function Image({ src, alt }) {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
}

function Rating({ rating, num_of_reviews }) {
  return (
    <RatingWrapper>
      <div className="stars">
        {[...Array(5).map((_, i) => <StarIcon key={i} filled={i < rating} />)]}
      </div>
      <span className="num_of_reviews">{`(${num_of_reviews} reviews)`}</span>
    </RatingWrapper>
  );
}

function Name({ name }) {
  return <CardTitle>{name}</CardTitle>;
}

function Icons({ icons }) {
  const card_icon_elements = icons.map((icon, index) => (
    <SvgWrapper key={index} className="svg_wrapper">
      {icon}
    </SvgWrapper>
  ));
  return <PricingCardICons>{card_icon_elements}</PricingCardICons>;
}

function Price({ price }) {
  return <PriceWrapper>{price}</PriceWrapper>;
}

CatalogProductCard.Discount = DiscountTag;
CatalogProductCard.Image = Image;
// CatalogProductCard.Tag = Tag;
CatalogProductCard.Rating = Rating;
CatalogProductCard.Name = Name;
CatalogProductCard.Price = Price;
CatalogProductCard.Icons = Icons;

export default CatalogProductCard;
