import React from 'react';
import { useCartContext } from '../context/CartContext';
import Cart_item from './cart_item.component';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';
import { useOutsideClick } from '../hooks/useOutsideClick';

const CartDropDownContainer = styled.div`
  /* display: flex; */
  /* flex-flow: column wrap; */

  border: ${({ theme }) => `.2rem solid ${theme.colors.black.base}`};
  background: ${({ theme }) => theme.colors.grey[0]};
  padding: 1.5rem 2rem;
  width: 25%;
  margin-left: auto;
  position: absolute;
  /* top: 50px; */
  top: 66px;
  /* right: 0; */
  right: 15.3rem;
  z-index: 5;
  overflow: scroll;

  * {
    scrollbar-color: #333 #f5f5f5;
    scrollbar-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const CartItemsWrapper = styled.div`
  height: 24rem;
  overflow-y: scroll;

  /* display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center; */

  .empty_message {
    align-self: center;
    justify-self: center;
  }

  .checkout_btn {
    padding: 0.8rem 1.2rem;
  }
`;

const StyledLink = styled(Link)``;

function Cart_drop_down({ close_cart_drop_down }) {
  //pulling out what is on the cart currently

  const { cart } = useCartContext();
  console.log(cart);

  // const []

  const ref = useOutsideClick(close_cart_drop_down);

  const cart_item_elements = cart.map((item) => <Cart_item {...item} />);
  return (
    <CartDropDownContainer ref={ref}>
      {cart.length > 0 ? (
        <CartItemsWrapper>{cart_item_elements}</CartItemsWrapper>
      ) : (
        <CartItemsWrapper>
          <h3 className="empty_message">Your cart is empty</h3>
        </CartItemsWrapper>
      )}
      {cart.length > 0 ? (
        <StyledLink
          to="/checkout"
          className="checkout_btn btn btn-primary rounded-md flex_items align_middle align_horizontal"
        >
          go to checkout
        </StyledLink>
      ) : (
        <StyledLink
          to="/products"
          className="checkout_btn btn btn-primary rounded-md flex_items align_middle align_horizontal"
          onClick={close_cart_drop_down}
        >
          Fill your cart
        </StyledLink>
      )}
    </CartDropDownContainer>
  );
}

export default Cart_drop_down;
