import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import styled from 'styled-components';

const SearchInputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 1.4rem;
    transform: translateY(-50%);
    font-size: 1.5rem;
    /* color: #073e72; */
    color: ${({ theme }) => theme.colors.secondary};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const InputWrapper = styled.input`
  width: 20rem;
  width: 90%;
  /* padding: 1.2rem 1.4rem 1.2rem 3.7rem; */
  padding: 0.8rem 1.4rem 0.8rem 3.7rem;
  background-color: #eaeff3;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 300;
  /* color: #073e72; */
  color: ${({ theme }) => theme.colors.secondary};

  &::placeholder {
    font-size: 1.33rem;
    font-weight: 300;
    /* color: #073e72; */
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

{
  /* <div class="search-bar">
    <input type="text" placeholder="What are you looking for?">
    <i class="fa-solid fa-magnifying-glass"></i>
</div>

.search-bar {
    position: relative;
}

.search-bar input {
}

.search-bar input::placeholder {
    font-size: 1.7rem;
    font-weight: 300;
    color: #073e72;
}

.search-bar i {
    position: absolute;
    top: 50%;
    left: 1.4rem;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #073e72;
} */
}

function Normal_input({ handle_change, product_searched }) {
  console.log(product_searched);
  return (
    <SearchInputWrapper>
      <InputWrapper
        type="text"
        name="search"
        id="search"
        value={product_searched}
        onChange={handle_change}
        placeholder="search"
      ></InputWrapper>
      <FaMagnifyingGlass />
    </SearchInputWrapper>
  );
}

export default Normal_input;
