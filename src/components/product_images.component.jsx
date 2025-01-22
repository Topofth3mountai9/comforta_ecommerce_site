import React, { useState } from 'react';
import styled from 'styled-components';
import { useSingleProductContext } from '../context/SingleProductContext';

const ProductImagesWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MainImageWrapper = styled.div`
  /* width: 100%; */
  /* height: 100%; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.border_radius.md};
  }
`;

const OtherImagesWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
`;

const OtherImageWrapper = styled.div`
  width: 13rem;
  height: 16rem;
  /* border: 0.3rem solid ${({ theme }) => theme.colors.light_primary}; */
  border: ${({ is_active, theme }) =>
    is_active
      ? `.3rem solid ${theme.colors.light_primary}`
      : `.1rem solid ${theme.colors.grey[300]}`};
  /* 0.3rem solid ${({ theme }) => theme.colors.light_primary}; */
  border-radius: ${({ theme }) => theme.border_radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    /* width: 100%; */
    /* height: 100%; */
    width: 60px;
    height: 80px;
    object-fit: cover;
    /* border-radius: ${({ theme }) => theme.border_radius.md}; */
    /* border-radius: ${({ theme }) => theme.border_radius.md}; */
  }
  /* border: 1px solid black;   */
`;

function Product_images() {
  const {
    specific_product: { images },
  } = useSingleProductContext();

  const default_product_image = images[0].url;

  const [current_product_image, set_current_product_image] = useState(
    default_product_image
  );
  const [active_product_image, set_active_product_image] = useState(0);

  const other_product_img_elements = images
    ?.slice(0, 3)
    .map((product_img, index) => {
      // console.log(product_img.url);
      return (
        <OtherImageWrapper
          key={index}
          is_active={active_product_image === index}
          onClick={() => {
            set_active_product_image(index);
            set_current_product_image(product_img.url);
          }}
        >
          <img src={product_img.url} alt={product_img.alt} />
        </OtherImageWrapper>
      );
    });
  return (
    <ProductImagesWrapper>
      <MainImageWrapper>
        {/* <img src={current_product_image} alt="main product image" /> */}
        <img
          src={`${current_product_image}`}
          alt="main product image"
          className="main_img"
        />
      </MainImageWrapper>
      <OtherImagesWrapper>{other_product_img_elements}</OtherImagesWrapper>
    </ProductImagesWrapper>
  );
}

export default Product_images;
