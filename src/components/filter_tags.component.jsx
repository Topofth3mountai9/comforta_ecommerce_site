import React from 'react';
import { useProductsFilterContext } from '../context/ProductsFilterContext';
import Filter_tag from '../ui/filter_tag.component';
import styled from 'styled-components';
import { CLEAR_ALL_FILTERS } from '../actions';
import { useSearchParams } from 'react-router-dom';
import { hex_color_to_string } from '../helpers/hex_to_string';

const FilterTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  top: -3.3rem;
  left: 15rem;

  .clear_all {
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      text-decoration: none;
    }
  }
`;

function Filter_tags() {
  const { current_filters, dispatch } = useProductsFilterContext();
  const [search_params, set_search_params] = useSearchParams();
  //creating a copy of current_filters
  let current_filters_copy = { ...current_filters };
  console.log(current_filters);
  for (let [key, value] of Object.entries(current_filters_copy)) {
    console.log(value);
    // if (value.startsWith('#')) {
    //   // console.log(value);
    //   current_filters_copy[key] = hex_color_to_string(value);
    //   // console.log(value);
    // }
    if (value === 'all') delete current_filters_copy[key];
  }
  let only_non_all_filters = current_filters_copy;
  console.log(only_non_all_filters);
  console.log(Object.entries(only_non_all_filters));
  console.log(Object.entries(only_non_all_filters).flatMap((f) => f));

  const filter_elements = Object.entries(only_non_all_filters).map(
    (filter_tag, index) => <Filter_tag key={index} filter_option={filter_tag} />
  );

  function remove_all_query_params() {
    const params = search_params.size;
    if (params > 0) {
      Object.entries(only_non_all_filters)
        .flatMap((f) => f)
        .forEach((param_query) => {
          param_query = param_query.startsWith('#')
            ? hex_color_to_string(param_query)
            : param_query;
          //deleting the query param
          search_params.delete(param_query);
          //updating the state afterwards
          set_search_params(search_params);
        });
    }
  }
  return (
    <FilterTagsWrapper>
      {filter_elements}
      {Object.keys(only_non_all_filters).length > 0 && (
        <span
          className="clear_all text_xs ml-2"
          onClick={() => {
            remove_all_query_params();
            dispatch({ type: CLEAR_ALL_FILTERS });
          }}
        >
          clear_all
        </span>
      )}
    </FilterTagsWrapper>
  );
}

export default Filter_tags;
