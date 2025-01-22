import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import ActualCart from './actual_cart.component';

const CartContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  margin-inline: auto;
  margin-top: 6rem;
`;

const StyledLink = styled(Link)`
  /* align-self: center; */
`;

const CartContentEmptyWrapper = styled.div`
  /* width: 100%; */
  text-align: center;

  h3 {
    font-weight: 600;
  }
  /* display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center; */
`;

// const ActualCart = styled.div``;

function CartContent() {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  return (
    <CartContentWrapper>
      {!cart.length > 0 ? (
        <CartContentEmptyWrapper className="page">
          <h3 className="mb_24">Your cart is empty!</h3>
          {/* <StyledLink
            to="/products"
            className="btn btn-primary rounded-md flex_item align_middle align_horizontal text_center"
          >
            Fill it
          </StyledLink> */}
          <button
            className="btn btn-primary rounded-md"
            onClick={() => navigate('/products')}
          >
            Fill it
          </button>
        </CartContentEmptyWrapper>
      ) : (
        <ActualCart />
      )}
      {/* <h2>cart content goes here!</h2> */}
    </CartContentWrapper>
  );
}

export default CartContent;
