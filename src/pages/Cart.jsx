import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../ui/breadcrumb.component';
import { HiOutlineChevronRight } from 'react-icons/hi';
import CartContent from '../components/cart_content.component';

const CartContainer = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

function Cart() {
  return (
    <CartContainer>
      <Breadcrumb current_page="cart" svg={<HiOutlineChevronRight />} />
      <CartContent />
    </CartContainer>
  );
}

export default Cart;
