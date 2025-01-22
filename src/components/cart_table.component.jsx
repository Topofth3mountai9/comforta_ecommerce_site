import React from 'react';
import Table from '../ui/table';
import { useCartContext } from '../context/CartContext';
import CartRow from './cart_row.component';

function CartTable() {
  const { cart } = useCartContext();
  return (
    <Table columns="1.1fr 0.8fr 0.8fr 0.8fr 0.5fr">
      <Table.Header>
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={cart}
        render={(individual_item) => (
          <CartRow cart_item_info={individual_item} />
        )}
      />
    </Table>
  );
}

export default CartTable;
