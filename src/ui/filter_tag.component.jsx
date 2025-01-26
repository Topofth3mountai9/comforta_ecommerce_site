import React from 'react';
import { theme } from '../styles/better_theme';
import { HiXMark } from 'react-icons/hi2';
import styled, { css } from 'styled-components';
import { useProductsFilterContext } from '../context/ProductsFilterContext';
import { Type } from 'lucide-react';
import { DELETE_FILTER } from '../actions';
import { hex_color_to_string } from '../helpers/hex_to_string';
import { useSearchParams } from 'react-router-dom';

const FilterTagWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey.c};
  border-radius: ${({ theme }) => theme.border_radius.md};
  padding-inline: 1rem;
  cursor: pointer;
  gap: 0.3rem;
  transition: all 0.3s;

  ${({ is_a_color, color, theme }) =>
    is_a_color &&
    css`
      background: ${color};
      color: ${({ theme }) => theme.colors.grey[0]};

      &:hover {
        opacity: 0.7;
      }
    `}
  svg {
    color: ${({ theme, is_a_color }) =>
      !is_a_color ? theme.colors.black.black_400 : theme.colors.grey[0]};
    height: 1.5rem;
    width: 1.5rem;
  }

  .filter_value {
    text-transform: capitalize;
  }

  &:hover {
    /* background: #e0e5eb; */
    background: ${({ theme, is_a_color, color }) =>
      is_a_color ? color : '#e0e5eb'};
  }
`;

function Filter_tag({ filter_option }) {
  const { dispatch } = useProductsFilterContext();
  const [search_params, set_search_params] = useSearchParams();
  console.log(search_params.getAll('company'));

  //   console.log(filter_option);
  //   console.log(filter_option.startsWith('#'));
  const [filter_field, filter_value] = filter_option;

  console.log(filter_field);

  function remove_query_params(filter_field) {
    const param = search_params.get(filter_field);

    if (param) {
      //delete the query param
      search_params.delete(filter_field);
      //updating state after deleting
      set_search_params(search_params);
    }
  }
  return (
    <FilterTagWrapper
      is_a_color={filter_value.startsWith('#')}
      color={filter_value.startsWith('#') ? filter_value : ''}
      className={`flex_items align_middle align_horizontal  text-[${theme.colors.black.black_200}] p-2 text_xs`}
    >
      <span
        onClick={() => {
          remove_query_params(filter_field);
          dispatch({ type: DELETE_FILTER, payload: filter_value });
        }}
      >
        <HiXMark />
      </span>{' '}
      <span className="filter_value">
        {filter_value.startsWith('#')
          ? hex_color_to_string(filter_value)
          : filter_value}
      </span>
    </FilterTagWrapper>
  );
}

export default Filter_tag;
