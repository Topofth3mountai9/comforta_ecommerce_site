import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../ui/breadcrumb.component';
import { HiOutlineChevronRight } from 'react-icons/hi';
import CheckoutContent from './checkout_content';
import OurContainer from '../../components/OurContainer.component';

const CheckoutContainer = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

function Checkout() {
  return (
    <OurContainer>
      <CheckoutContainer>
        <Breadcrumb current_page="checkout" svg={<HiOutlineChevronRight />} />
        <CheckoutContent />
      </CheckoutContainer>
    </OurContainer>
  );
}

export default Checkout;
