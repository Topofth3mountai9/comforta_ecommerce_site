import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import CatalogProductCard from './catalog_product_card.component';
import { Heart, Link } from 'lucide-react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { filter_products } from '../helpers/filter_products';
import { CHANGE_FILTERED_PRODUCTS } from '../actions';
import { ProductCard } from './product_card.component';
import Empty from './empty.component';
import Pagination from '../ui/Pagination';
import { usePaginationContext } from '../context/PaginationContext';
import { results_on_the_screen } from '../constants';
import Loader from '../ui/Loader';
import { useGetProducts } from '../hooks/useGetProducts';

const ProductListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  position: relative;
  /* margin-bottom: 5rem; */

  .num_of_products {
    position: absolute;
    top: -2.4rem;
    left: 4rem;
    /* color: ${({ theme }) => theme.colors.grey[400]}; */
    color: ${({ theme }) => theme.colors.grey.e};
    font-size: ${({ theme }) => theme.typography.text.xs};
  }
`;

const CardContent = styled.div`
  padding: 0 16px 16px;
  flex-grow: 1;
`;

//defining filter functions

const filter_functions = {
  category: (products, value) =>
    value === 'all'
      ? products
      : products.filter((product) => product.category === value),
  colors: (products, value) =>
    value === 'all'
      ? products
      : products.filter((product) => product.colors.some((c) => c === value)),

  company: (products, value) =>
    value === 'all'
      ? products
      : products.filter((product) => product.company === value),

  price_below: (products, value) =>
    value === Infinity
      ? products
      : products.filter((product) => product.price <= Number(value) * 100),
};

//defining sort functions
const sort_functions = {
  'price-desc': (products) => [...products].sort((a, b) => b.price - a.price),
  'price-asc': (products) => [...products].sort((a, b) => a.price - b.price),
  'name-a': (products) =>
    [...products].sort((a, b) => a.name.localeCompare(b.name)),
  'name-z': (products) =>
    [...products].sort((a, b) => b.name.localeCompare(a.name)),
};

function ProductList() {
  const {
    found_products: all_products,
    is_getting_products,
    count,
    error,
  } = useGetProducts();

  const navigate = useNavigate();
  console.log(all_products);
  //grabbing the filter value from the url
  const [search_params] = useSearchParams();
  const { page } = usePaginationContext();

  // if (is_getting_products) return <Loader />;
  // if (!all_products.length) return <Empty resource_name="products" />;

  // let filtered_products;
  //when the products is still loading, process products will be an empty array, that's why we need to check if products are still loading
  if (is_getting_products) return <Loader />;

  if (!all_products.length > 0) return <Empty resource_name={`Products`} />;

  console.log(all_products.length);

  const pricing_card_elements = all_products.map((product) => {
    const { id, image, name, stars: rating, price, description } = product;

    return (
      <ProductCard
        key={id}
        {...product}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <ProductCard.Image src={image} alt={name} />
        {/* <ProductCard.Image src="/gallery/gallery_1.jpg" alt={name} /> */}
        <ProductCard.CardHoverContent
          name={name}
          description={description}
          product={product}
        />
        <ProductCard.Header
          title={name}
          description={description.slice(0, 40)}
        />
        <CardContent>
          <ProductCard.Rating rating={rating || 4.5} />
          <ProductCard.Price price={price} />
        </CardContent>
      </ProductCard>
      // <CatalogProductCard key={name}>
      //   <CatalogProductCard.Icons
      //     icons={[<Heart />, <Link />, <FaMagnifyingGlassPlus />]}
      //   />
      //   <CatalogProductCard.Image src={image} alt={name} />
      //   <CatalogProductCard.Rating rating={rating || 4} num_of_reviews={7900} />
      //   <CatalogProductCard.Name>{name}</CatalogProductCard.Name>
      //   <CatalogProductCard.Price price={price} />
      // </CatalogProductCard>
    );
  });
  return (
    <ProductListWrapper>
      {pricing_card_elements}
      <span className="num_of_products">
        {all_products.length > 1
          ? `${count} products found`
          : `${count} product found`}
        {/* {process_products.all_filtered_products.length} products found */}
      </span>
      <Pagination total_results={count} />
      {/* <Pagination total_results={process_products.length} /> */}
    </ProductListWrapper>
  );
}

export default ProductList;
