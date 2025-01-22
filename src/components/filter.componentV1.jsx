import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

const FilterWrapper = styled.div`
  h5 {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
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
  background: ${({ theme }) => theme.colors.primary};
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
  // like_sort = false,
}) {
  const [search_params, set_search_params] = useSearchParams();

  let current_filter =
    search_params.get(filter_field) || filter_options.at(0).value;

  function handle_click(value) {
    //we need to get the params from the url
    //the way this works is we need to set the params first
    search_params.set(filter_field, value);
    set_search_params(search_params);
  }

  // if (like_sort) {
  //   return;
  // }
  // const [active_filter_btn, set_active_filter_btn] = useState(filter_options)
  const filter_option_elements = filter_options.map((option, index) => {
    const { value, label } = option;

    return (
      <>
        {!tags ? (
          <StyledFilterOptionButton
            key={index}
            className="bt "
            is_active={current_filter === value}
            onClick={() => handle_click(value)}
            disabled={current_filter === value}
          >
            {/* <input type="radio" name="radio" id="radio" /> */}
            <RadioBtn>
              <InnerRadioBtn
                is_active={current_filter === value}
                className="inner_radio_btn"
              ></InnerRadioBtn>
            </RadioBtn>
            <span>{label}</span>
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
    <FilterWrapper>
      {/* <h5>{filter_header}</h5> */}
      <h5>{filter_field}</h5>
      {filter_option_elements}
    </FilterWrapper>
  );
}

export default Filter;
