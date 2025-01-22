import React from 'react';
import Sort_by from './sort_by.component';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-right: 10.5rem;

  .num_of_products {
    color: ${({ theme }) => theme.colors.grey[400]};
    font-size: ${({ theme }) => theme.typography.text.xs};
  }

  .sort_by {
    margin-left: auto;
  }
`;

function Sort_operations() {
  // const { all_products, filtered_products } = useFilterContext();
  return (
    <SortWrapper>
      <hr />
      <Sort_by
        sort_options={[
          { value: 'price-desc', label: 'Price(High first)' },
          { value: 'price-asc', label: 'Price(Low first)' },
          { value: 'name-a', label: 'Name(A - Z)' },
          { value: 'name-Z', label: 'Name(z - A)' },
        ]}
        other_class="sort_by"
      />
      {/* <span className="num_of_products">
        {filtered_products.length} products found
      </span> */}
    </SortWrapper>
  );
}

export default Sort_operations;
