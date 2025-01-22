import React from 'react';
import styled from 'styled-components';
import PricingCard from './pricing_card.component';
import { useGetProducts } from '../hooks/useGetProducts';
import { Heart, Link } from 'lucide-react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const FrequentlyViewedWrapper = styled.div`
  h3 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black.light};
    margin-block: 2.5rem 2rem;
  }
  .frequently_viewed_product_cards {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

function Frequently_viewed() {
  const { found_products: products } = useGetProducts();
  const navigate = useNavigate();
  const frequently_viewed_elements = products.slice(0, 4).map((product) => {
    const { id, image, name, stars: rating, price } = product || {};
    return (
      <PricingCard onClick={() => navigate(`/product/${product.id}`)}>
        <PricingCard.Icons
          icons={[<Link />, <Heart />, <FaMagnifyingGlassPlus />]}
        />
        <PricingCard.Image src={image || `/gallery/gallery7.jpg`} />
        <PricingCard.Name name={name || 'great chairs'} />
        <PricingCard.Rating rating={rating || 4} />
        <PricingCard.Price price={price || 400} />
      </PricingCard>
    );
  });
  return (
    <FrequentlyViewedWrapper>
      <h3 className="mb_24">Frequently viewed items</h3>
      <div className="frequently_viewed_product_cards">
        {frequently_viewed_elements}
      </div>
    </FrequentlyViewedWrapper>
  );
}

export default Frequently_viewed;
