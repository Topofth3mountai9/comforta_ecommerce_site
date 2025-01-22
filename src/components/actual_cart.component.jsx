import React from 'react';
import CartTable from './cart_table.component';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OrderTotal from './order_total.component';
import { useCartContext } from '../context/CartContext';
import { respond_to } from '../helpers/breakpoints';

const ActualCartWrapper = styled.div`
  /* max-width: 70%; */
  /* margin-inline: auto; */

  .cart_buttons {
    display: flex;
  }

  ${respond_to('768')} {
    width: 80%;
  }

  ${respond_to('450')} {
    width: 90%;
  }
`;

function ActualCart() {
  const { clear_cart } = useCartContext();
  const navigate = useNavigate();
  return (
    <ActualCartWrapper className="flex_items flex_column">
      <CartTable />
      <div className="cart_buttons flex_items mt_24">
        <button
          className="btn btn-secondary "
          onClick={() => navigate('/products')}
        >
          continue shopping
        </button>
        <button className="btn btn-primary item_end " onClick={clear_cart}>
          clear cart
        </button>
      </div>
      <OrderTotal />
    </ActualCartWrapper>
  );
}

export default ActualCart;
