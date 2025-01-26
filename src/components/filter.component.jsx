import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Normal_select from './normal_select.component';
import { hex_color_to_string } from '../helpers/hex_to_string';
import { theme } from '../styles/theme';
import { useProductsFilterContext } from '../context/ProductsFilterContext';
import { ADD_NEW_FILTER } from '../actions';

const FilterWrapper = styled.div`
  margin-top: 1em;
  .filter_title {
    text-transform: capitalize;
    /* margin-block: 0.5em; */
  }
`;

const StyledFilterOptionButton = styled.button`
  /* padding: 0.6em 1.2em; */
  padding: 0.8em 1.6em;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1em;
  background: none;
  border-radius: ${({ theme }) => theme.border_radius.pill};
  margin-bottom: 0.7rem;
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey[300]}`};
  display: flex !important;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  color: ${({ theme, is_active }) =>
    is_active ? theme.colors.primary : theme.colors.black.dark};

  &:hover {
    background: #f8f8f8 !important;
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  ${({ is_active }) =>
    is_active &&
    css`
      .inner_radio_btn {
        display: block;
        visibility: visible;
        opacity: 1;
      }
    `}/* .active {
    .inner_radio_btn {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  } */
`;

const RadioBtn = styled.div`
  background: transparent;
  height: 1.5rem;
  width: 1.5rem;
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey[300]}`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const InnerRadioBtn = styled.div`
  /* .inner_radio_btn { */
  height: 0.8rem;
  width: 0.8rem;
  background: ${({ is_active, is_a_color, color, theme }) => {
    if (is_a_color) return color;
    // console.log(color);
    else return theme.colors.primary;
  }};
  display: none;
  visibility: hidden;
  opacity: 0;
  border-radius: 50%;

  ${({ is_active }) =>
    is_active &&
    css`
      display: block;
      visibility: visible;
      opacity: 1;
    `}/* } */
`;

function Filter({
  filter_field,
  filter_options,
  direction,
  filter_header,
  tags = false,
  like_sort = false,
  like_card = false,
}) {
  const { state, dispatch } = useProductsFilterContext();
  const [form_data, set_form_data] = useState();
  const [search_params, set_search_params] = useSearchParams();

  let current_filter =
    search_params.get(filter_field) || filter_options.at(0).value;

  //updating the filters in productfiltercontext any time the search_params change
  // useEffect(() => {
  //   if (current_filter) {
  //     dispatch({ type: ADD_NEW_FILTER, payload: current_filter });
  //   }
  // }, [current_filter]);

  let filter_wrapper_style = {};
  if (like_card)
    filter_wrapper_style = {
      padding: '1.5rem',
      border: `.2rem solid ${theme.colors.grey.d}`,
      borderRadius: `${theme.border_radius.md}`,
    };

  function handle_click(value) {
    //we need to get the params from the url
    //the way this works is we need to set the params first
    search_params.set(filter_field, value);
    set_search_params(search_params);

    //we also create the filter tags
    // dispatch({ type: ADD_NEW_FILTER, payload: value });
  }

  function handle_change(event) {
    set_form_data(event.target.value);
    search_params.set(filter_field, event.target.value);
    set_search_params(search_params);
  }

  // if (like_sort) {
  //   return <
  // }
  // const [active_filter_btn, set_active_filter_btn] = useState(filter_options)
  const filter_option_elements = filter_options.map((option, index) => {
    const { value, label } = option;
    //to change the color section
    let colors_style;
    colors_style = label.includes('#') ? { color: label } : {};
    console.log(value, label);

    return (
      <>
        {!tags ? (
          <StyledFilterOptionButton
            key={index}
            className="bt "
            is_active={current_filter === value}
            is_a_color={value.includes('#')}
            color={value}
            onClick={() => handle_click(value)}
            disabled={current_filter === value}
          >
            {/* <input type="radio" name="radio" id="radio" /> */}
            <RadioBtn>
              <InnerRadioBtn
                is_active={current_filter === value}
                className="inner_radio_btn"
                is_a_color={value.includes('#')}
                color={value}
              ></InnerRadioBtn>
            </RadioBtn>
            <span style={colors_style}>
              {label.includes('#') ? hex_color_to_string(label) : label}
            </span>
          </StyledFilterOptionButton>
        ) : (
          <FilterButton
            key={option.value}
            onClick={() => handle_click(option.value)}
            active={value === current_filter}
            disabled={value === current_filter}
          >
            {label}
          </FilterButton>
        )}
      </>
    );
  });
  return (
    <FilterWrapper style={filter_wrapper_style}>
      {/* <h5>{filter_header}</h5> */}
      <h4 className="filter_title mb-4">{filter_field}</h4>
      {!like_sort ? (
        filter_option_elements
      ) : (
        <Normal_select
          options={filter_options}
          handle_change={handle_change}
          value={current_filter}
        />
      )}
    </FilterWrapper>
  );
}

export default Filter;
