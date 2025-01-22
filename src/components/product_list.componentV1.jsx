import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import CatalogProductCard from './catalog_product_card.component';
import { Heart, Link } from 'lucide-react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';
import { filter_products } from '../helpers/filter_products';
import { CHANGE_FILTERED_PRODUCTS } from '../actions';

const ProductListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* margin-bottom: 5rem; */
`;

function ProductList() {
  const {
    all_products,
    dispatch,
    type_unique_values: {
      categories: unique_categories,
      companies: unique_companies,
      colors: unique_colors,
    },
  } = useFilterContext();
  console.log(all_products);
  //grabbing the filter value from the url
  const [search_params] = useSearchParams();
  // console.log(search_params);
  //1. Filtering

  //we need to account for the situation when the component first loads and the filter value is null, essentially, it should be 'all'
  // const category_filter_value = search_params.get('category') || 'all';
  // const colors_filter_value = search_params.get('colors') || 'all';

  // let filtered_products = all_products;
  // console.log(filtered_products);
  //we need to return the right array of objects any time the search params change

  // useEffect(() => {
  //   function filter_categories() {
  //     for (let category of unique_categories.slice(1)) {
  //       if (category_filter_value === 'all') {
  //         filtered_products = all_products;
  //         return filtered_products;
  //       }
  //       if (category_filter_value === category) {
  //         filtered_products = filter_products(
  //           all_products,
  //           'category',
  //           category
  //         );
  //         return filtered_products;
  //       }
  //     }
  //   }
  //   filter_categories();
  // }, [[], search_params]);

  // useEffect(() => {
  //   function filter_colors() {
  //     for (let color of unique_colors) {
  //       // console.log(color);
  //       if (colors_filter_value === 'all') {
  //         filtered_products = all_products;
  //         return filtered_products;
  //       }
  //       if (colors_filter_value === color) {
  //         filtered_products = filter_products(all_products, 'colors', color);
  //         return filter_products;
  //       }
  //     }
  //   }

  //   filter_colors();
  // }, [search_params]);

  //1. Filtering
  let filtered_products;

  const category_filter_value = search_params.get('category') || 'all';

  // console.log(filtered_products);
  if (category_filter_value === 'all') filtered_products = all_products;
  //   if (category_filter_value === 'bedroom')
  //     filtered_products = all_products.filter(
  //       (product) => product.category === 'bedroom'
  //     );
  if (category_filter_value === 'bedroom')
    filtered_products = filter_products(all_products, 'category', 'bedroom');
  if (category_filter_value === 'office')
    filtered_products = filter_products(all_products, 'category', 'office');
  if (category_filter_value === 'kitchen')
    filtered_products = filter_products(all_products, 'category', 'kitchen');
  if (category_filter_value === 'living_room')
    filtered_products = filter_products(
      all_products,
      'category',
      'living room'
    );
  if (category_filter_value === 'kids')
    filtered_products = filter_products(all_products, 'category', 'kids');
  if (category_filter_value === 'dining')
    filtered_products = filter_products(all_products, 'category', 'dining');

  const colors_filter_value = search_params.get('colors') || 'all';

  // if(colors_filter_value === 'all') filtered_products = filtered_products
  if (colors_filter_value === 'all') filtered_products = filtered_products;
  // colors.forEach(color => {
  //   if(colors_filter_value === color) filtered_products = filter_products(filtered_products,'colors', color)
  // })

  //2. SORTING
  //WE GET THE SORTING VALUE FROM PARAMS
  // const

  //ENSURING THE FILTERED PRODUCTS IS IN SYNC, so essentially, whenever filtered products changes, we change the filtered_products state in FilterContext
  // useEffect(() => {
  //   dispatch({ type: CHANGE_FILTERED_PRODUCTS, payload: filtered_products });
  //   console.log(filtered_products);
  // }, [filtered_products]);

  const pricing_card_elements = filtered_products.map((product) => {
    const { image, name, stars: rating, price } = product;
    return (
      <CatalogProductCard>
        <CatalogProductCard.Icons
          icons={[<Heart />, <Link />, <FaMagnifyingGlassPlus />]}
        />
        <CatalogProductCard.Image src={image} alt={name} />
        <CatalogProductCard.Rating rating={rating} num_of_reviews={7900} />
        <CatalogProductCard.Name>{name}</CatalogProductCard.Name>
        <CatalogProductCard.Price price={price} />
      </CatalogProductCard>
    );
  });
  return <ProductListWrapper>{pricing_card_elements}</ProductListWrapper>;
}

export default ProductList;
