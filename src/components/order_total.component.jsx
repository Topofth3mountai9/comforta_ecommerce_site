import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { format_currency } from '../helpers/format_currency';
import { useNavigate } from 'react-router-dom';

const OverallWrapper = styled.div`
  width: 30rem;
  align-self: end;
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 1rem;
`;

const OrderTotalWrapper = styled.div`
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey.great}`};
  border-radius: ${({ theme }) => theme.border_radius.md};
  background: none;
  padding: 2rem 3rem;
  /* align-self: end; */
  margin-top: 2rem;
  width: 30rem;

  .common {
    display: flex;
    justify-content: space-between;
  }

  .subtotal {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.heading.five};
    letter-spacing: 0.15rem;
    /* font-family: ${({ theme }) => theme.typography.fonts.money}; */
  }

  .shipping_fee {
    margin-top: 0.6rem;
    color: ${({ theme }) => theme.colors.grey[500]};
    text-transform: capitalize;
    /* font-family: ${({ theme }) => theme.typography.fonts.money}; */
  }

  .order_total {
    text-transform: capitalize;
    /* font-family: ${({ theme }) => theme.typography.fonts.money}; */
  }
`;

function OrderTotal() {
  const { total_amount, shipping_fee } = useCartContext();
  const navigate = useNavigate();
  return (
    <OverallWrapper>
      <OrderTotalWrapper>
        <h5 className="subtotal common">
          Subtotal: <span>{format_currency(total_amount)}</span>
        </h5>
        <p className="shipping_fee common ">
          shipping fee :{' '}
          <span className="money">{format_currency(shipping_fee)}</span>
        </p>
        <hr />
        <div className="order_total common heading_4">
          <span>Order total</span>
          <span className="money">
            {format_currency(total_amount + shipping_fee)}
          </span>
        </div>
      </OrderTotalWrapper>
      <StyledButton
        className="btn btn-secondary rounded-md w-100"
        onClick={() => navigate('/checkout')}
      >
        proceed to checkout
      </StyledButton>
    </OverallWrapper>
  );
}

export default OrderTotal;
