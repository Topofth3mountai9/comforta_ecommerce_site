import React from 'react';
import styled from 'styled-components';
import PricingCard from './pricing_card.component';
import { useGetProducts } from '../hooks/useGetProducts';
import { Heart, Link } from 'lucide-react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { format_currency } from '../helpers/format_currency';
import Pagination from '../ui/Pagination';
import { useGetFrequentlyViewedProducts } from '../hooks/useGetFequenlyViewedProducts';
import Loader from '../ui/Loader';

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
  // const { found_products: products, count } = useGetProducts();
  const {
    found_products: products,
    count,
    is_getting_frequently_viewed_products,
  } = useGetFrequentlyViewedProducts();
  const navigate = useNavigate();
  console.log(products);

  if (is_getting_frequently_viewed_products) return <Loader />;

  const frequently_viewed_elements = products.map((product) => {
    const { id, image, name, stars: rating, price } = product || {};
    return (
      <PricingCard onClick={() => navigate(`/product/${product.id}`)}>
        <PricingCard.Icons
          icons={[<Link />, <Heart />, <FaMagnifyingGlassPlus />]}
        />
        <PricingCard.Image src={image || `/gallery/gallery7.jpg`} />
        <PricingCard.Name name={name || 'great chairs'} />
        <PricingCard.Rating rating={rating || 4} />
        <PricingCard.Price price={format_currency(price) || 400} />
      </PricingCard>
    );
  });
  return (
    <FrequentlyViewedWrapper>
      <h3 className="mb_24">Frequently viewed items</h3>
      <div className="frequently_viewed_product_cards">
        {frequently_viewed_elements}
      </div>
      <Pagination
        pagination_category="frequently_viewed_items"
        total_results={count}
      />
    </FrequentlyViewedWrapper>
  );
}

export default Frequently_viewed;
