import React, { useState, useEffect } from 'react';
import Normal_range from './normal_range.component';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
// import { theme } from '../styles/theme';
import { useGetProducts } from '../hooks/useGetProducts';
import { theme } from '../styles/better_theme';
import Loader from '../ui/Loader';

const PriceFilterWrapper = styled.div`
  margin-block: 1em;
  .price_filter_title {
    text-transform: capitalize;
    margin-block: 0.5em;
  }

  .current_price {
    /* color: ${({ theme }) => theme.colors.grey.e}; */
    color: ${({ theme }) => theme.colors.brand_secondary_light[700]};
    font-weight: 600;
  }
`;

function Price_filter({ like_card = false }) {
  // const { all_products } = useFilterContext();
  const {
    all_products: everything,
    found_products: all_products,
    is_getting_products,
    count,
    error,
  } = useGetProducts();

  //state for min and max price
  const [prices, set_prices] = useState({
    min_price: null,
    max_price: null,
  });
  const [form_data, set_form_data] = useState(null);
  console.log(form_data);

  //setting the min and max prices only when 'everything' changes
  useEffect(() => {
    if (everything.length > 0) {
      const min = Math.min(
        ...everything.flatMap((p) => Number(p['price']) / 100)
      );
      const max = Math.max(
        ...everything.flatMap((p) => Number(p['price']) / 100)
      );
      set_prices({
        min_price: min,
        max_price: max,
      });
    }
  }, [everything]);

  let filter_wrapper_style = {};
  if (like_card)
    filter_wrapper_style = {
      padding: '1.5rem',
      border: `.2rem solid ${theme.colors.grey.c}`,
      borderRadius: `${theme.border_radius.md}`,
    };

  // console.log(max);

  //TO GET PARAMS ON THE URL
  const [search_params, set_search_params] = useSearchParams();

  //WHATEVER IS ON THE URL IS WHAT IS SELECTED BY DEFAULT
  // const price_below = search_params.get('price_below') || ''
  const price_below =
    search_params.get('price_below') || prices.max_price || 3099.99;

  function handle_change(event) {
    set_form_data(event.target.value);
    search_params.set('price_below', event.target.value);
    set_search_params(search_params);
  }

  //avoid rendering before min an max price are set
  if (prices.min_price === null || prices.max_price === null) {
    return <Loader />;
  }

  return (
    <PriceFilterWrapper style={filter_wrapper_style}>
      <h4 className="price_filter_title">Price</h4>
      <span className="current_price text-[#767676]">
        ${`${prices.min_price}.00`} - ${`${form_data || prices.max_price}.00`}
      </span>
      <Normal_range
        min={prices.min_price || 30.99}
        max={prices.max_price || 3000.99}
        handle_change={handle_change}
        value={price_below}
      />
    </PriceFilterWrapper>
  );
}

export default Price_filter;
