import React, { useState } from 'react';
import Normal_range from './normal_range.component';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import { theme } from '../styles/theme';
import { useGetProducts } from '../hooks/useGetProducts';

const PriceFilterWrapper = styled.div`
  margin-block: 1em;
  .price_filter_title {
    text-transform: capitalize;
    margin-block: 0.5em;
  }

  .current_price {
    color: ${({ theme }) => theme.colors.grey.e};
    font-weight: 600;
  }
`;

function Price_filter({ like_card = false }) {
  // const { all_products } = useFilterContext();
  const {
    found_products: all_products,
    is_getting_products,
    count,
    error,
  } = useGetProducts();
  const min = Math.min(
    ...all_products.flatMap((p) => Number(p['price']) / 100)
  );
  // console.log(min);
  const max = Math.max(
    ...all_products.flatMap((p) => Number(p['price']) / 100)
  );
  // console.log(max);
  // console.log(all_products);
  const [form_data, set_form_data] = useState(max || 3099.99);
  // console.log(form_data);

  let filter_wrapper_style = {};
  if (like_card)
    filter_wrapper_style = {
      padding: '1.5rem',
      border: `.2rem solid ${theme.colors.grey.d}`,
      borderRadius: `${theme.border_radius.md}`,
    };

  // console.log(max);

  //TO GET PARAMS ON THE URL
  const [search_params, set_search_params] = useSearchParams();

  //WHATEVER IS ON THE URL IS WHAT IS SELECTED BY DEFAULT
  // const price_below = search_params.get('price_below') || ''
  const price_below = search_params.get('price_below') || max;

  function handle_change(event) {
    set_form_data(event.target.value);
    search_params.set('price_below', event.target.value);
    set_search_params(search_params);
  }

  return (
    <PriceFilterWrapper style={filter_wrapper_style}>
      <h4 className="price_filter_title">Price</h4>
      <span className="current_price text-[#767676]">
        ${`${min}.00`} - ${`${form_data}.00`}
      </span>
      <Normal_range
        min={min || 30.99}
        max={max || 3000.99}
        handle_change={handle_change}
        value={price_below}
      />
    </PriceFilterWrapper>
  );
}

export default Price_filter;
