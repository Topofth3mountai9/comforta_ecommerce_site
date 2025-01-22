import React, { useState } from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import { useSearchParams } from 'react-router-dom';
import Normal_input from './normal_input.component';
import { useGetProducts } from '../hooks/useGetProducts';

const SearchFilterWrapper = styled.div``;

function Search_filter() {
  // const { all_products } = useFilterContext();
  const { found_products: all_products } = useGetProducts();

  //STATE TO HOLD SEARCH VALUE
  const [form_data, set_form_data] = useState('');

  //to get the params on the URL
  const [search_params, set_search_params] = useSearchParams();

  //whatever is on the url selected by default
  const current_search = search_params.get('search') || '';

  function handle_change(event) {
    // console.log(event);
    let { name, type, value, checked } = event.target;
    set_form_data(value);

    search_params.set('search', value);
    set_search_params(search_params);
  }
  return (
    <SearchFilterWrapper>
      <Normal_input
        handle_change={handle_change}
        product_searched={current_search}
      />
    </SearchFilterWrapper>
  );
}

export default Search_filter;
