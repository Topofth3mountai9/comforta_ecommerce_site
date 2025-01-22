import React from 'react';
import styled from 'styled-components';
import Checkout_form from './checkout_form';
import OrderSummary from './order_summary';
import { respond_to } from '../../helpers/breakpoints';

const CheckoutWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1.3fr auto; */
  grid-template-columns: auto 1.3fr;
  gap: 4rem;
  width: 70%;
  margin-inline: auto;
  margin-top: 5rem;

  ${respond_to('1000')} {
    width: 80%;
  }
  ${respond_to('900')} {
    width: 90%;
  }
  ${respond_to('768')} {
    grid-template-columns: 1fr;
  }
`;

function CheckoutContent() {
  return (
    <CheckoutWrapper>
      <OrderSummary />
      <Checkout_form />
    </CheckoutWrapper>
  );
}

export default CheckoutContent;
