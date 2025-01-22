import React from 'react';
import Table from '../ui/my_table';
import { product_technical_info } from '../data';

function ItemColumn({ brand, color, product_dimensions, size }) {
  // const  = item_info;
  return (
    <Table.Column>
      <div>{brand}</div>
      <div>{color}</div>
      <div>{product_dimensions}</div>
      <div>{size}</div>
    </Table.Column>
  );
}

function Trial() {
  return (
    <Table
      rows="1fr 1fr 1fr 1fr 1fr 1fr"
      header_1="features"
      header_2="details"
    >
      <Table.Header>
        <div>Brand</div>
        <div>Color</div>
        <div>Product Dimensions</div>
        <div>Size</div>
      </Table.Header>
      <Table.Body
        data={product_technical_info}
        render={(individual_product) => (
          <ItemColumn key={individual_product.id} {...individual_product} />
        )}
      />
    </Table>
  );
}

export default Trial;
