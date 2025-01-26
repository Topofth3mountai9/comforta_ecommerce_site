import React, { useState } from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import { useSearchParams } from 'react-router-dom';
import Normal_input from './normal_input.component';
import { useGetProducts } from '../hooks/useGetProducts';
import { to_be_removed_when_searching } from '../helpers/filter_helpers';

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

    //removing the other filters
    to_be_removed_when_searching.forEach((filter_field) => {
      // console.log(filter_field);
      let param_query = search_params.get(filter_field);
      // console.log(param_query);
      if (param_query) {
        //deleting the query param
        search_params.delete(filter_field);

        //updating the state afterwards
        set_search_params(search_params);
      }
    });

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
