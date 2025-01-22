import React from 'react';
import Table from '../ui/table';
import styled from 'styled-components';
import { HiOutlineTrash, HiOutlineX } from 'react-icons/hi';
import { format_currency } from '../helpers/format_currency';
import { Delete, Minus, Plus, Trash } from 'lucide-react';
import { useCartContext } from '../context/CartContext';
import { respond_to } from '../helpers/breakpoints';

const Img = styled.img`
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);

  ${respond_to('768')} {
    width: 8rem;
    transform: none;
  }
`;
const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 30%;

  ${respond_to('768')} {
    width: auto;
    margin-left: auto;
  }

  button {
    /* width: 40px; */
    /* height: 40px; */
    /* border: 1px solid #ddd; */
    background: none;
    cursor: pointer;

    &:hover {
      background: #f5f5f5;
    }
  }

  input {
    /* width: 60px; */
    height: 40px;
    text-align: center;
    /* border: 1px solid #ddd; */
  }
  .quantity {
    /* width: 60px; */
    font-weight: 600;
    height: 40px;
    text-align: center;
    /* border: 1px solid #ddd; */
  }
`;

const TableRowWrapper = styled.div`
  .img_name_and_color {
    ${respond_to('768')} {
      width: 100%;
      justify-content: flex-start;
    }
  }
  .name {
    font-weight: 600;
    text-transform: capitalize;
  }
  .delete_btn {
    cursor: pointer;
    svg {
      width: 2rem;
      height: 2rem;
    }

    ${respond_to('768')} {
      margin-left: auto;
    }
  }

  .color_chosen {
    gap: 0.5rem;

    .color_item_text {
      color: ${({ theme }) => theme.colors.grey[400]};
    }
  }

  .color {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }

  .price {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.typography.fonts.money};
  }

  .quantity {
    font-family: ${({ theme }) => theme.typography.fonts.money};
  }

  .sub_total {
    font-family: ${({ theme }) => theme.typography.fonts.money};
  }

  ${respond_to('768')} {
    .price,
    .sub_total {
      margin-left: auto;
    }
  }
`;

function CartRow({ cart_item_info }) {
  console.log(cart_item_info);
  const { remove_item_from_cart, increase_item_count, decrease_item_count } =
    useCartContext();
  const {
    id,
    image,
    name,
    color_chosen,
    price,
    amount_of_items_chosen,
    sub_total,
  } = cart_item_info;
  return (
    <TableRowWrapper>
      <Table.Row>
        <div className="img_name_and_color flex_items g_1">
          <Img src={image} />
          <div className="name_and_color flex_items flex_column">
            <span className="name text_tiny">{name}</span>
            <div className="color_chosen flex_items align_middle">
              <span className="color_item_text">Color : </span>
              <div className="color" style={{ background: color_chosen }}></div>
            </div>
          </div>
        </div>
        <span className="price text_tiny">{format_currency(price)}</span>
        <QuantitySelector>
          <button onClick={() => decrease_item_count(id, color_chosen)}>
            <Minus />
          </button>

          <div className="quantity flex_items align_middle align_horizontal text_small">
            {amount_of_items_chosen}
          </div>
          <button onClick={() => increase_item_count(id, color_chosen)}>
            <Plus />
          </button>
        </QuantitySelector>
        <span className="sub_total text_tiny">
          {format_currency(price * amount_of_items_chosen)}
          {/* placeholder */}
        </span>
        <div
          className="delete_btn"
          onClick={() => remove_item_from_cart(id, color_chosen)}
        >
          {/* <HiOutlineX />
          <Delete />
          <Trash /> */}
          <HiOutlineTrash />
        </div>
      </Table.Row>
    </TableRowWrapper>
  );
}

export default CartRow;
