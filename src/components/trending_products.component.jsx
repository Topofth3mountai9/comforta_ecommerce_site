import React from 'react';
import OurContainer from './OurContainer.component';
import styled from 'styled-components';
import Tag from '../ui/Tag.component';
import { Link, useNavigate } from 'react-router-dom';
import { useGetProducts } from '../hooks/useGetProducts';
import { useProductsContext } from '../context/ProductsContext';
import { ProductCard } from './product_card.component';
import { respond_to } from '../helpers/breakpoints';
import Loader from '../ui/Loader';

const TrendingProductsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const CardContent = styled.div`
  padding: 0 16px 16px;
  flex-grow: 1;
`;

const TrendingProductsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  /* align-items: center; */
  justify-content: center;
  gap: 4rem;
  width: 95%;
  margin-inline: auto;
  /* margin-inline: auto; */

  /* div {
    justify-self: center;
  } */

  .tag {
    align-self: flex-start;
    ${respond_to('450')} {
      align-self: center;
    }
  }
`;

// const StyledButton = styled.button`
//   align-self: start;
//   text-transform: capitalize;
//   border: 2px solid currentColor;
//   padding: 0.5rem 1rem;
//   &:hover {
//     background-color: var(--primary);
//     color: white;
//   }
// `;

const StyledLink = styled(Link)`
  align-self: start;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* align-items: center; */
  align-items: flex-start;

  h2 {
    /* font-family: ${({ theme }) => theme.typography.fonts.secondary}; */
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }
  /* ${respond_to('485')} { */
  ${respond_to('593')} {
    text-align: center;

    .tag {
      align-self: center;
    }

    .heading_one {
      align-self: center;
    }
    p {
      width: 75%;
      margin-inline: auto;
    }
    .trending_products_btn {
      align-self: center;
    }
  }
`;

function Trending_products() {
  const navigate = useNavigate();
  // const { featured_products } = useProductsContext();
  const {
    all_products,
    found_products = [],
    is_getting_products,
    count,
    error,
  } = useGetProducts();

  if (is_getting_products) return <Loader />;
  console.log(found_products);

  const featured_products = all_products.filter(
    (product) => product.featured === true
  );

  const trending_product_elements = featured_products
    .slice(0, 9)
    .map((product) => (
      <ProductCard
        key={product.id}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <ProductCard.Image src={product.image} alt={product.name} />
        {/* <ProductCard.Image src="/gallery/gallery_1.jpg" alt={product.name} /> */}
        <ProductCard.Header title={product.name} />
        <CardContent>
          <ProductCard.Rating rating={4} />
          <ProductCard.Price price={product.price} />
        </CardContent>
      </ProductCard>
    ));
  return (
    <TrendingProductsContainer className="mb_144 mt-24">
      <OurContainer>
        <TrendingProductsContent>
          <Header>
            <Tag other_class="tag">High quality</Tag>
            <h2 className="text-primary heading_one">Our Trending Products</h2>
            <p className="text-[#2a2d38]">
              Discover the latest in furniture trends with our curated
              collection of must have pieces. From sleek modern designs to
              timeless classics, these trending products are sure to elevate
              your space
            </p>
            <StyledLink
              to="/products"
              className="trending_products_btn btn btn-outline btn-secondary flex_items align_middle align_horizontal align-self-flex-start"
            >
              view all
            </StyledLink>
          </Header>
          {!is_getting_products ? trending_product_elements : <Loader />}
        </TrendingProductsContent>
      </OurContainer>
    </TrendingProductsContainer>
  );
}

export default Trending_products;
