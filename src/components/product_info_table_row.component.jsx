import React from 'react';
import Table from '../ui/table';

function Product_info_table_row({ details_info }) {
  const { brand, colors, product_dimensions, size, unit_count } = details_info;

  return (
    <>
      <Table.Row>
        <span>{}</span>
      </Table.Row>
    </>
  );
}

export default Product_info_table_row;
