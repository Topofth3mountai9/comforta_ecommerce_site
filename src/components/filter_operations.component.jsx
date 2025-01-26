import React, { useEffect } from 'react';
import styled from 'styled-components';
import Filter from './filter.component';
import Sort_by from './sort_by.component';
import { useFilterContext } from '../context/FilterContext';
import { get_unique_values } from '../helpers/get_unique_values';
import { create_options } from '../helpers/create_options';
import Price_filter from './price_filter.component';
import { SET_UNIQUE_TYPES } from '../actions';
import Search_filter from './search_filter.component';
import { respond_to } from '../helpers/breakpoints';
import { useGetProducts } from '../hooks/useGetProducts';

const FilterOperationsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 5.3rem;

  ${respond_to('900')} {
    display: none;
  }
`;

function Filter_operations() {
  // const { all_products, dispatch } = useFilterContext();
  const {
    all_products: everything,
    found_products: all_products,
    is_getting_products,
    count,
    error,
  } = useGetProducts();
  const unique_categories = get_unique_values(everything, 'category');
  const unique_companies = get_unique_values(everything, 'company');
  // console.log(unique_companies);
  const default_companies = ['all', 'ikea', 'marcos', 'liddy', 'caressa'];
  const unique_colors = get_unique_values(everything, 'colors');
  console.log(unique_colors);
  //when the component first loads we want to populate the different unique_value_types(colors, categories...)
  // useEffect(() => {
  //   dispatch({
  //     type: SET_UNIQUE_TYPES,
  //     payload: [unique_categories, unique_companies, unique_colors],
  //   });
  // }, [all_products]);
  return (
    <FilterOperationsWrapper className="mt-18">
      {/* <span>search input</span> */}
      {/* <h3>Filter Options</h3> */}
      <Search_filter />
      <Filter
        filter_field="category"
        filter_options={[
          { value: 'all', label: 'All' },
          { value: 'bedroom', label: 'bedroom' },
          { value: 'office', label: 'office' },
          { value: 'kitchen', label: 'kitchen' },
          { value: 'living room', label: 'living room' },
          { value: 'kids', label: 'kids' },
          { value: 'dining', label: 'dining' },
        ]}
        like_card={true}
      />
      <Price_filter like_card={true} />
      {/* <Sort_by
        sort_options={create_options(default_companies || unique_companies)}
        sort_header="Company"
      /> */}
      <Filter
        filter_field="company"
        // filter_options={create_options(unique_companies || default_companies)}
        filter_options={create_options(default_companies || unique_companies)}
        like_sort={true}
        like_card={true}
      />
      {/* <Sort_by /> */}

      <Filter
        filter_field="colors"
        filter_options={create_options(unique_colors)}
        like_card={true}
      />
    </FilterOperationsWrapper>
  );
}

export default Filter_operations;
