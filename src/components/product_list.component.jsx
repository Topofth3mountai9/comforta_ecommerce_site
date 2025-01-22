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
  // const {
  //   all_products,
  //   is_getting_products,
  //   count,
  //   filtered_products,
  //   dispatch,
  //   type_unique_values: {
  //     categories: unique_categories,
  //     companies: unique_companies,
  //     colors: unique_colors,
  //   },
  // } = useFilterContext();
  const navigate = useNavigate();
  console.log(all_products);
  //grabbing the filter value from the url
  const [search_params] = useSearchParams();
  const { page } = usePaginationContext();

  // if (is_getting_products) return <Loader />;
  // if (!all_products.length) return <Empty resource_name="products" />;

  //1. Filtering
  //getting current filters from the url (retrieving all current filter values from URL parameters, providing defaults if not present )
  function get_current_filters() {
    return {
      category: search_params.get('category') || 'all',
      colors: search_params.get('colors') || 'all',
      company: search_params.get('company') || 'all',
      price_below: search_params.get('price_below') || Infinity,
      // price_below: search_params.get('price_below') || '420',
    };
  }

  //The core filtering logic
  //Memoized filter to prevent unnecessary recalculations, it applies each filter function in sequence, passing the results of one filter to the next
  const process_products = useMemo(() => {
    //1. apply filters
    let result = [...all_products];

    //start of search
    const current_search_value = search_params.get('search') || '';
    result = current_search_value
      ? result.filter((product) =>
          product.name
            .toLowerCase()
            .includes(current_search_value.toLowerCase())
        )
      : result;
    //end of search
    const current_filters = get_current_filters();
    console.log(current_filters);

    for (let [key, value] of Object.entries(current_filters)) {
      //confirming if the function exists
      if (filter_functions[key]) {
        //if function exists
        result = filter_functions[key](result, value);
      }
    }

    //2. Apply sorting
    const sort_by = search_params.get('sort_by') || 'price-desc';
    const sort_fn = sort_functions[sort_by];

    console.log(result);

    // return sort_fn ? sort_fn(result) : result;
    result = sort_fn ? sort_fn(result) : result;
    console.log(result);

    //3. Apply pagination

    const start = (page - 1) * results_on_the_screen;
    const end = start + results_on_the_screen;
    console.log(start, end);
    console.log(result.slice(start, end));

    return {
      paginated_products: result.slice(start, end),
      total_count: result.length,
      all_filtered_products: result, //keeping full filtered list for context
    };
  }, [all_products, search_params]);

  //update FilterContext when processed products change
  // useEffect(() => {
  //   //we are checking if the current filtered products is different from what we have currently filtered,if they are not different we perform a more serious check of every single element in both arrays
  //   if (
  //     process_products.all_filtered_products.length !==
  //       filtered_products?.length ||
  //     !process_products.all_filtered_products.every(
  //       (item, i) => item.id === filtered_products[i]?.id
  //     )
  //   ) {
  //     dispatch({
  //       type: CHANGE_FILTERED_PRODUCTS,
  //       payload: process_products.all_filtered_products,
  //     });
  //   }
  // }, [process_products.all_filtered_products, dispatch]);

  // let filtered_products;
  //when the products is still loading, process products will be an empty array, that's why we need to check if products are still loading
  if (is_getting_products) return <Loader />;

  if (!process_products.paginated_products.length > 0)
    return <Empty resource_name={`Products`} />;

  console.log(process_products.paginated_products.length);

  const pricing_card_elements = process_products.paginated_products.map(
    (product) => {
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
    }
  );
  return (
    <ProductListWrapper>
      {pricing_card_elements}
      <span className="num_of_products">
        {process_products.all_filtered_products.length > 1
          ? `${process_products.all_filtered_products.length} products found`
          : `${process_products.all_filtered_products.length} product found`}
        {/* {process_products.all_filtered_products.length} products found */}
      </span>
      <Pagination total_results={process_products.total_count} />
      {/* <Pagination total_results={process_products.length} /> */}
    </ProductListWrapper>
  );
}

export default ProductList;
