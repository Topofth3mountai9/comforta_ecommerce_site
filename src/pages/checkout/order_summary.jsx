import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import styled from 'styled-components';
import { useCartContext } from '../../context/CartContext';
import { format_currency } from '../../helpers/format_currency';
import { respond_to } from '../../helpers/breakpoints';
import { useNavigate } from 'react-router-dom';

const OrderSummaryWrapper = styled.div`
  display: flex;
  flex-flow: column;
  /* padding: 2rem 1.5rem; */

  border-radius: ${({ theme }) => theme.border_radius.md};
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.grey.input_bg};
  width: 25rem;

  .common {
    display: flex;
    justify-content: space-between;
  }

  .header {
    background: ${({ theme }) => theme.colors.brand_secondary_dark[300]};
    color: ${({ theme }) => theme.colors.grey[200]};
    padding: 1.8rem 1.5rem;
    border-top-right-radius: ${({ theme }) => theme.border_radius.md};
    border-top-left-radius: ${({ theme }) => theme.border_radius.md};
  }
  .subtotal_shipping_coupon {
    background: ${({ theme }) => theme.colors.grey.input_bg};
    color: ${({ theme }) => theme.colors.grey.f};
    padding: 1.8rem 1.5rem;
    letter-spacing: 0.1rem;

    .sub_total {
    }
  }

  .total {
    background: ${({ theme }) => theme.colors.grey[0]};
    padding: 0.3rem 1.5rem;
    letter-spacing: 0.1rem;
  }

  .action_btns {
    background: ${({ theme }) => theme.colors.grey.input_bg};
    border-bottom-right-radius: ${({ theme }) => theme.border_radius.md};
    border-bottom-left-radius: ${({ theme }) => theme.border_radius.md};
    padding: 1.8rem 1.5rem;
  }

  ${respond_to('768')} {
    justify-content: center;
    width: 100%;
    max-width: 30rem;
    margin-inline: auto;
  }
`;

function OrderSummary() {
  const navigate = useNavigate();
  const { total_amount, shipping_fee } = useCartContext();
  const subtotal = format_currency(total_amount - shipping_fee);
  return (
    <OrderSummaryWrapper>
      <div className="header bg_secondary">
        <h5>Order Summary</h5>
      </div>
      <div className="subtotal_shipping_coupon">
        <h5 className="sub_total common">
          Subtotal <span>{subtotal}</span>
        </h5>
        <p className="shipping common">
          Shipping <span>{format_currency(shipping_fee)}</span>
        </p>
        <p className="coupon text_secondary flex_items g_2">
          Add coupon code{' '}
          <span>
            <HiArrowRight />
          </span>
        </p>
      </div>
      <div className="total">
        <p className="total common heading_4">
          Total <span>{format_currency(total_amount)}</span>
        </p>
      </div>
      <div className="action_btns flex_items g_2">
        <button className="btn btn-secondary">Confirm Payment</button>
        <button
          className="btn btn-outline btn-info"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
      </div>
    </OrderSummaryWrapper>
  );
}

export default OrderSummary;
