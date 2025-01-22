import React from 'react';
import OurContainer from './OurContainer.component';
import styled from 'styled-components';
import Product_images from './product_images.component';
import { Product } from '../ui/single_product_page_hero';
import { useSingleProductContext } from '../context/SingleProductContext';

const SinglePageHeroContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SinglePageHeroContent = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: repeat(2, 1fr);
  width: 60%;
  margin-inline: auto;
  gap: 2rem;
`;

function Single_page_hero() {
  const { specific_product } = useSingleProductContext();
  console.log(specific_product);
  // let specific_product_ = {
  //   ...specific_product,
  //   images: [
  //     ...specific_product.images,
  //     {
  //       ...specific_product.images[0],
  //       url: `/products/${specific_product.images[0].filename}.jpeg`,
  //     },
  //     // images[0].url : ,
  //   ],
  // };
  // // specific_product_.images.shift();
  // console.log(specific_product_);
  const {
    id = 'recQ0fMd8T0Vk211E',
    images = [],
    name = '',
    price = 0,
    category = '',
    stock = 4,
    colors = ['#ff0000', '#00ff00', '#0000ff', '#000', '#ffb900'],
    stars: rating = 4.5,
  } = specific_product || {};

  const main_product_image = images[0]?.url;

  return (
    // <SinglePageHeroContainer>
    // <OurContainer>
    <Product>
      <Product.Image
        mainImage={main_product_image}
        thumbnails={images.slice(0, 3).map((image) => image.url)}
      />
      <Product.Info>
        <Product.Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'products', href: '/products' },
            { label: 'armchairs', href: '/products/armchairs' },
          ]}
        />
        <Product.Title>{name}</Product.Title>
        <Product.Price original={70000} sale={price} />
        {stock > 0 && <Product.Timer days={1} hours={2} mins={3} secs={4} />}
        <Product.Availability stock={stock} />
        {stock > 0 && (
          <Product.AddToCart
            stock={stock}
            colors={colors}
            specific_product={specific_product}
          />
        )}
        <Product.ImportantInfo sku={12} category={category} />
      </Product.Info>
    </Product>
    // </OurContainer>
    // </SinglePageHeroContainer>
  );
}

export default Single_page_hero;
