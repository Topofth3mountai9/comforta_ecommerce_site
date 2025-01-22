import React from 'react';
import styled from 'styled-components';
import { useGetProducts } from '../hooks/useGetProducts';
import { Heart, Link } from 'lucide-react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import PricingCard from './pricing_card.component';
import { useNavigate } from 'react-router-dom';
import { format_currency } from '../helpers/format_currency';

const SimilarItemsWrapper = styled.div`
  h3 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black.light};
    margin-block: 2.5rem 2rem;
  }
  .similar_product_cards {
    width: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

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

  .img_wrapper {
    width: 20rem;
    height: 18rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
  }

  .pricing_card_icons {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;

    svg {
      width: 3rem;
      height: 3rem;
      background-color: #fff;
      border-radius: 50%;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      font-size: 1.2rem;
      color: #073e72;
      opacity: 0;
      visibility: hidden;
      transform: translateY(2rem);
      transition: all 0.3s;
    }
  }

  &:hover {
    svg {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const Similar_items = () => {
  const { found_products: products } = useGetProducts();
  const navigate = useNavigate();
  const similar_product_elements = products.map((product) => {
    const { id, image, name, stars: rating, price } = product || {};
    // console.log(rating);
    return (
      //   <PricingCardWrapper>
      //     <div className="pricing_card_icons">
      //       <Link />
      //       <Heart />
      //       <FaMagnifyingGlassPlus />
      //     </div>
      //     <div className="img_wrapper">
      //       <img src={image} alt={`${name} img`} />
      //     </div>
      //     <span className="name">{name}</span>
      //     <Rating rating={rating || 4} />
      //     <h4>{price}</h4>
      //   </PricingCardWrapper>
      <PricingCard onClick={() => navigate(`/product/${product.id}`)}>
        <PricingCard.Icons
          icons={[<Link />, <Heart />, <FaMagnifyingGlassPlus />]}
        />
        <PricingCard.Image src={image} />
        <PricingCard.Name name={name} />
        <PricingCard.Rating rating={rating || 4} />
        <PricingCard.Price price={format_currency(price)} />
      </PricingCard>
    );
  });

  return (
    <SimilarItemsWrapper>
      <h3 className="mb_24">Discover Similar items</h3>
      <div className="similar_product_cards">{similar_product_elements}</div>
    </SimilarItemsWrapper>
  );
};

export default Similar_items;
