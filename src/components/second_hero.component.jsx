import React from 'react';
import { useProductsContext } from '../context/ProductsContext';
import Hero_vanilla from '../ui/hero_vanilla_with_bg_overlay_and_text_centered';
import Subscribe_form from './subscribe_form.component';
import { useGetProducts } from '../hooks/useGetProducts';

function second_hero() {
  // const { featured_products } = useProductsContext();
  const {
    found_products = [],
    is_getting_products,
    count,
    error,
  } = useGetProducts();
  //   console.log(featured_products);

  const featured_products = found_products.filter(
    (product) => product.featured === true
  );

  const background_imgs = featured_products.map((product) => product.image);
  console.log(background_imgs);
  return (
    <Hero_vanilla slides={featured_products}>
      <Hero_vanilla.Text marginTop={0}>
        Comfortable and Stylish
      </Hero_vanilla.Text>
      <Hero_vanilla.Subtitle>
        Don't miss our best discount for this month for our subscribers
      </Hero_vanilla.Subtitle>
      <Hero_vanilla.Content>
        <Subscribe_form />
      </Hero_vanilla.Content>
    </Hero_vanilla>
  );
}

export default second_hero;
