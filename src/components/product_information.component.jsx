import React from 'react';
import styled from 'styled-components';
import Table from '../ui/my_table';
import { product_technical_info } from '../data';
import { Link } from 'react-router-dom';

console.log(product_technical_info);

const ProductInformationWrapper = styled.div`
  width: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  .product_info_tables {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* justify-content: space-between; */
  }

  .warranty_and_support {
    a {
      text-decoration: ${({ theme }) =>
        `underline solid ${theme.colors.primary}`};
      /* text-decoration: */
    }
  }
`;

function TechnicalDetailsItemColumn({
  brand,
  color,
  product_dimensions,
  size,
}) {
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

function AdditionalDetailsItemColumn({
  asin,
  customer_reviews,
  best_seller_rank,
  date_first_amiable,
}) {
  //   console.log(somn);
  // const  = item_info;
  return (
    <Table.Column>
      <div>{asin}</div>
      <div>{customer_reviews}</div>
      <div>{best_seller_rank}</div>
      <div>{date_first_amiable}</div>
    </Table.Column>
  );
}

function Product_information() {
  return (
    <ProductInformationWrapper>
      <div className="product_info_tables flex_items g_2 mb_48">
        <div className="table_1">
          <h3 className="mb_24">Technical Details</h3>
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
                <TechnicalDetailsItemColumn
                  key={individual_product.id}
                  {...individual_product}
                />
              )}
            />
          </Table>
        </div>
        <div className="table_2">
          <h3 className="mb_24">Additional Details</h3>
          <Table
            rows="1fr 1fr 1fr 1fr 1fr 1fr"
            header_1="features"
            header_2="details"
          >
            <Table.Header>
              <div>ASIN</div>
              <div>Customer Reviews</div>
              <div>Best Seller Rank</div>
              <div>Date First Amiable</div>
            </Table.Header>
            <Table.Body
              data={product_technical_info}
              render={(individual_product, index) => {
                const { extra_info } = individual_product;
                console.log(extra_info);
                return (
                  <AdditionalDetailsItemColumn key={index} {...extra_info} />
                );
              }}
            />
          </Table>
        </div>
      </div>
      <div className="warranty_and_support">
        <h3 className="mb_24">Warranty & support</h3>
        <p>
          Comforta.com Return policy: Regardless of your statutory right of
          withdrawal , you enjoy a 30-day right of return for many products. For
          exceptions and conditions see{' '}
          <span>
            <Link to="#!" className="text_primary">
              Return details
            </Link>
          </span>
          .
        </p>
        <p>
          Manufacturers warranty can be regenerated from customer service{' '}
          <span>
            <Link to="#!" className="text_primary">
              Click here
            </Link>
          </span>{' '}
          to make a request to customer service.
        </p>
      </div>
    </ProductInformationWrapper>
  );
}

export default Product_information;
