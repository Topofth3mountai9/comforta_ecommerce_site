import React from 'react';
import { format_currency } from '../helpers/format_currency';
import styled from 'styled-components';

const CartItemWrapper = styled.div`
  align-items: flex-start;
  margin-bottom: 2rem;
  .cart_img {
    width: 8rem;
    height: 9rem;
    object-fit: cover;
  }
  .name {
    text-transform: capitalize;
  }

  .cart_item_info {
    gap: 0.5rem;
  }

  .color_chosen {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
  }
`;

function Cart_item({
  image,
  name,
  amount_of_items_chosen,
  price,
  color_chosen,
}) {
  console.log(image, name, amount_of_items_chosen, price);
  return (
    <CartItemWrapper className="flex_items g_2 align_middl">
      <img src={image} alt={name} className="cart_img" />
      <div className="cart_item_info flex_items  flex_column g_1">
        <span className="name">{name}</span>
        <div className="price_and_count">
          <span className="num_of_items">
            {amount_of_items_chosen || 'undefined'}
          </span>{' '}
          X<span className="price"> {format_currency(price)}</span>
          <div className="flex_items g_1 align_middle">
            <span>Color: </span>{' '}
            <div
              className="color_chosen"
              style={{ background: color_chosen }}
            ></div>
          </div>
        </div>
      </div>
    </CartItemWrapper>
  );
}

export default Cart_item;
