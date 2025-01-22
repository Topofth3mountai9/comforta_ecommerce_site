import React from 'react';
import styled from 'styled-components';
import Single_page_hero from '../components/single_page_hero.component';
import Single_page_more from '../components/single_page_more.component';
import { useParams } from 'react-router-dom';
import { useGetSpecificProduct } from '../hooks/useGetSpecificProduct';
import Loader from '../ui/Loader';
import { SingleProductContextProvider } from '../context/SingleProductContext';

const SingleProductContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

function SingleProduct() {
  const { product_id } = useParams();
  const { specific_product, error, is_getting_specific_product } =
    useGetSpecificProduct(product_id);

  if (is_getting_specific_product) return <Loader />;

  if (error) {
    console.log('ERROR ENCOUNTERED WHEN FETCHING SPECIFIC PRODUCT!', error);
    // throw new Error('ERROR ENCOUNTERED FETCHING SPECIFIC PRODUCT!');
  }
  console.log(specific_product);

  return (
    <SingleProductContextProvider
      value={{
        specific_product,
        error,
        is_getting_specific_product,
      }}
    >
      <SingleProductContainer>
        <Single_page_hero />
        <Single_page_more />
      </SingleProductContainer>
    </SingleProductContextProvider>
  );
}

export default SingleProduct;
