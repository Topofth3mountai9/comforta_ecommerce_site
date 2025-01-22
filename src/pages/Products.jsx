import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../ui/breadcrumb.component';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Sorts from '../components/sort_operations.component';
import Filter_operations from '../components/filter_operations.component';
import Sort_operations from '../components/sort_operations.component';
import ProductList from '../components/product_list.component';
import OurContainer from '../components/OurContainer.component';
import { respond_to } from '../helpers/breakpoints';
import { FilterContextProvider } from '../context/FilterContext';

const ProductsContainer = styled.div`
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

const ProductsContent = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 2rem;
  /* width: 80%; */
  width: 90%;
  margin-inline: auto;

  ${respond_to('900')} {
    grid-template-columns: 1fr;
  }
`;

function Products() {
  return (
    <ProductsContainer className="page">
      <Breadcrumb current_page="products" svg={<HiOutlineChevronRight />} />
      <OurContainer>
        <ProductsContent>
          {/* <FilterContextProvider> */}
          <Filter_operations />
          <div className="sort_and_product_list">
            <Sort_operations />
            <ProductList />
          </div>
          {/* </FilterContextProvider> */}
        </ProductsContent>
      </OurContainer>
    </ProductsContainer>
  );
}

export default Products;
