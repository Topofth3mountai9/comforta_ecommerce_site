import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';
import { format_currency } from '../helpers/format_currency';
import { Link } from 'react-router-dom';
import { respond_to } from '../helpers/breakpoints';

const CardWrapper = styled.div`
  width: 30rem;
  margin: 1rem;
  /* margin-inline: auto; */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  &:hover {
    .card_hover_wrapper {
      background-color: rgba(0, 0, 0, 0.6);

      &::before {
        transform: scale(1);
      }
      &::after {
        transform: scale(1);
      }
      h4 {
        opacity: 1;
        visibility: visible;
        transition: all 0.5s 0.6s;
      }
      p {
        opacity: 1;
        visibility: visible;
        transition: all 0.5s;
      }
      .add_to_cart_btn {
        opacity: 1;
        visibility: visible;
        transition: all 0.1s;
      }
    }
  }

  ${respond_to('600')} {
    margin-inline: auto;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  position: absolute;
  bottom: 4rem;
  left: 6rem;
`;

const CardImage = styled.img`
  width: 100%;
  /* height: 200px; */
  height: 20rem;
  object-fit: cover;
`;

const CardHoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.6s;
  color: ${({ theme }) => theme.colors.grey[0]};

  //we need to hide the card_hover_content and only show it when we hover
  h4 {
    position: absolute;
    top: 4rem;
    left: 4rem;
    width: 15rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  p {
    position: absolute;
    top: 13rem;
    left: 4rem;
    width: 17rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  .add_to_cart_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
  }

  &::before {
    content: '';
    width: 90%;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 0;
    top: 2rem;
    //hiding it
    transform: scale(0);
    transform-origin: left;
    transition: transform 0.8s;
  }

  &::after {
    content: '';
    width: 0.1rem;
    height: 94%;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    left: 2rem;
    top: 0;
    transform: scale(0);
    transform-origin: top;
    transition: transform 0.8s;
  }
`;

const CardHeader = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h4`
  margin: 0;
  /* font-size: 1.25rem; */
  /* font-size: ; */
  font-weight: 500;
  text-transform: capitalize;
`;

const CardDescription = styled.p`
  margin: 8px 0 0;
  /* font-size: 0.875rem; */
  font-size: ${({ theme }) => theme.typography.text.tiny};
  color: #666;
`;

const CardContent = styled.div`
  padding: 0 16px 16px;
  flex-grow: 1;
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

const Price = styled.h5`
  /* font-size: 1.25rem; */
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.fonts.money};
`;

const CardFooter = styled.div`
  padding: 16px;
  background-color: #f7f7f7;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0060df;
  }
`;

export function ProductCard({ children, ...props }) {
  // console.log(props);
  return <CardWrapper {...props}>{children}</CardWrapper>;
}

ProductCard.Image = function ProductCardImage({ src, alt }) {
  return <CardImage src={src} alt={alt} />;
};

ProductCard.CardHoverContent = function CardHoverContent({
  name,
  description,
  // product,
}) {
  return (
    <CardHoverWrapper className="card_hover_wrapper">
      <h4 className="card_hover_title">{name}</h4>
      <p className="card_hover_description">{description.slice(0, 70)}</p>
      <StyledLink
        to={`/cart`}
        className="add_to_cart_btn btn btn-secondary"
        // onClick={() => {
        //   console.log(product);
        // }}
      >
        buy now
      </StyledLink>
    </CardHoverWrapper>
  );
};

ProductCard.Header = function ProductCardHeader({ title, description }) {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}...</CardDescription>
    </CardHeader>
  );
};

ProductCard.Rating = function ProductCardRating({ rating }) {
  return (
    <RatingWrapper>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </RatingWrapper>
  );
};

ProductCard.Price = function ProductCardPrice({ price }) {
  //   console.log(price);
  //   return <Price>${price.toFixed(2)}</Price>;
  return <Price>{format_currency(price / 100)}</Price>;
};

ProductCard.Footer = function ProductCardFooter({ children }) {
  return <CardFooter>{children}</CardFooter>;
};

// Example usage
export function ProductCardDemo() {
  return (
    <ProductCard>
      <ProductCard.Image
        src="/placeholder.svg?height=200&width=300"
        alt="Product Image"
      />
      <ProductCard.Header
        title="Awesome Product"
        description="This is a great product you shouldn't miss!"
      />
      <CardContent>
        <ProductCard.Rating rating={rating || 4} />
        <ProductCard.Price price={99.99} />
      </CardContent>
      <ProductCard.Footer>
        <Button>Add to Cart</Button>
      </ProductCard.Footer>
    </ProductCard>
  );
}
