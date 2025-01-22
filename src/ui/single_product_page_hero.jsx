import styled, { css } from 'styled-components';
import { createContext, useContext, useState, useEffect } from 'react';
import OurContainer from '../components/OurContainer.component';
import { Check, CheckCircle, Clock, Heart } from 'lucide-react';
import { format_currency } from '../helpers/format_currency';
import { social_media_links } from '../data';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import { hex_color_to_string } from '../helpers/hex_to_string';
import { useCartContext } from '../context/CartContext';
import { respond_to } from '../helpers/breakpoints';

const ProductContext = createContext({
  quantity: 1,
  setQuantity: () => {},
});

const ProductContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.max_width_sm};
  margin-inline: auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 70%;
  min-height: 80vh;
  /* display: flex; */
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  ${respond_to('768')} {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .main-image {
    /* width: 100%; */
    width: 40rem;
    height: auto;
    border-radius: 8px;
  }
`;

const ThumbsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ThumbImageWrapper = styled.div`
  border: ${({ is_active, theme }) =>
    is_active
      ? `0.1rem solid ${theme.colors.brand_primary_light[500]}`
      : `0.1rem solid ${theme.colors.grey[600]}`};
  border-radius: ${({ theme }) => theme.border_radius.md};
  cursor: pointer;
  opacity: 0.5;

  ${({ is_active }) =>
    is_active &&
    css`
      opacity: 1;
    `}

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.border_radius.md};
    cursor: pointer;
    /* border: 0.1rem solid ${({ theme }) => theme.colors.grey[400]}; */
    border: ${({ is_active, theme }) =>
      is_active
        ? `0.2rem solid ${theme.colors.primary}`
        : `0.1rem solid ${theme.colors.grey[700]}`};

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Breadcrumbs = styled.div`
  display: flex;
  gap: 0.5rem;
  /* color: $; */
  color: ${({ theme }) => theme.colors.grey.great};
  font-size: 1rem;
  /* font-size: ${({ theme }) => theme.typography.text.xxs}; */

  ${respond_to('768')} {
    display: none;
  }
`;
const BreadcrumbLink = styled.a`
  color: ${({ theme, isLast }) =>
    isLast ? theme.colors.black.base : theme.colors.grey.great};
  text-decoration: none;
  font-weight: ${({ isLast }) => (isLast ? '600' : '400')};

  &:hover {
    text-decoration: ${({ isLast }) => (isLast ? 'none' : 'underline')};
  }
`;

const Title = styled.h3`
  /* font-size: 2rem; */
  margin: 0;
  text-transform: capitalize;
`;

const PriceContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.text.small};
  font-family: ${({ theme }) => theme.typography.fonts.money};

  .original-price {
    color: ${({ theme }) => theme.colors.grey[300]};
    text-decoration: line-through;
  }

  .sale-price {
    /* font-size: 1.5rem; */
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const TimerContainer = styled.div`
  margin: 1rem 0;

  .timer-title {
    color: ${({ theme }) => theme.colors.unknown_colors.color_warning};
    margin-bottom: 1rem;
    font-weight: 600;
    gap: 0.5rem;
  }

  .timer-digits {
    display: grid;
    grid-auto-flow: column;
    gap: 1.25rem;
    text-align: center;
    grid-auto-columns: max-content;
  }
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  /* background-color: ${({ theme }) => theme.colors.grey[900]}; */
  background: transparent;
  border-radius: ${({ theme }) => theme.border_radius.md};
  border: 1px solid ${({ theme }) => theme.colors.unknown_colors.color_warning};
  /* color: ${({ theme }) => theme.colors.grey[100]}; */
  color: ${({ theme }) => theme.colors.unknown_colors.color_warning};

  .countdown {
    font-family: monospace;
    font-size: 2rem;
  }

  .label {
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const StyledParagraph = styled.p`
  color: ${({ stock, theme }) =>
    stock ? theme.colors.grey[400] : theme.colors.unknown_colors.color_warning};
  font-size: ${({ theme }) => theme.typography.text.xxs};

  svg {
    height: 2rem;
    width: 2rem;
    color: #33b63b;
  }
`;

const AddToCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  .btn {
    width: 20%;
    width: 40px;
    height: 40px;
  }

  .stock_and_colors {
    span {
      color: ${({ theme }) => theme.colors.grey[300]};
      margin-right: 3rem;
    }
  }
`;
const ColorWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.grey[0]};
    display: ${({ is_active }) => (is_active ? 'block' : 'none')};
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 30%;

  button {
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    background: none;
    cursor: pointer;

    &:hover {
      background: #f5f5f5;
    }
  }

  input {
    width: 60px;
    height: 40px;
    text-align: center;
    border: 1px solid #ddd;
  }
  .quantity {
    width: 60px;
    height: 40px;
    text-align: center;
    border: 1px solid #ddd;
  }
`;

const StyledLink = styled(Link)`
  width: 55%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &.primary {
    background: #000;
    color: white;
  }

  &.secondary {
    width: 100%;
    background: #ff8c00;
    color: white;
  }
`;

const ImportantInfoWrapper = styled.div`
  .sku,
  .category,
  .tags,
  .share {
    color: ${({ theme }) => theme.colors.grey[400]};
    font-size: ${({ theme }) => theme.typography.text.xxs};
  }
  .actual_info {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey[600]};
  }
`;

const StyledIcon = styled(Link)`
  svg {
    color: ${({ theme }) => theme.colors.black.base};
    fill: transparent;
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export function Product({ children, ...props }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductContext.Provider value={{ quantity, setQuantity }}>
      <ProductContainer {...props}>
        {/* <OurContainer>{children}</OurContainer> */}
        {children}
      </ProductContainer>
    </ProductContext.Provider>
  );
}

Product.Image = function ProductImage({ mainImage, thumbnails }) {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [active_product_image, set_active_product_image] = useState(0);

  return (
    <ImageContainer>
      <img src={currentImage} alt="Product" className="main-image" />
      <ThumbsContainer>
        {thumbnails.map((thumb, index) => (
          <ThumbImageWrapper
            key={index}
            is_active={active_product_image === index}
            onClick={() => {
              setCurrentImage(thumb);
              set_active_product_image(index);
            }}
          >
            <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} />
          </ThumbImageWrapper>
        ))}
      </ThumbsContainer>
    </ImageContainer>
  );
};

Product.Info = function ProductInfo({ children }) {
  return <ProductInfoWrapper>{children}</ProductInfoWrapper>;
};

Product.Breadcrumbs = function ProductBreadcrumbs({ items }) {
  return (
    <Breadcrumbs>
      {items.map((item, index) => (
        <>
          <BreadcrumbLink href={item.href} isLast={index === items.length - 1}>
            {item.label}
          </BreadcrumbLink>
          {index < items.length - 1 && <span>›</span>}
        </>
      ))}
    </Breadcrumbs>
  );
};

Product.Title = function ProductTitle({ children }) {
  return <Title>{children}</Title>;
};

Product.Price = function ProductPrice({ original, sale }) {
  return (
    <PriceContainer>
      <span className="original-price text-[#bbb]">
        {format_currency(original / 100)}
      </span>
      <span className="sale-price">{format_currency(sale / 100)}</span>
    </PriceContainer>
  );
};

Product.Timer = function ProductTimer({
  initialDays = 1,
  initialHours = 2,
  initialMinutes = 3,
  initialSeconds = 4,
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (
          prev.days === 0 &&
          prev.hours === 0 &&
          prev.minutes === 0 &&
          prev.seconds === 0
        ) {
          clearInterval(timer);
          return prev;
        }

        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes--;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours--;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays--;
        }

        return {
          days: Math.max(0, newDays),
          hours: Math.max(0, newHours),
          minutes: Math.max(0, newMinutes),
          seconds: Math.max(0, newSeconds),
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <TimerContainer>
      <div className="timer-title flex_items align_middle">
        {' '}
        <span>
          <Clock />
        </span>
        Hurry up! Deal ends in:
      </div>
      <div className="timer-digits">
        <TimeUnit>
          <span className="countdown">
            <span style={{ '--value': timeLeft.days }}>{timeLeft.days}</span>
          </span>
          <span className="label">days</span>
        </TimeUnit>
        <TimeUnit>
          <span className="countdown">
            <span style={{ '--value': timeLeft.hours }}>{timeLeft.hours}</span>
          </span>
          <span className="label">hours</span>
        </TimeUnit>
        <TimeUnit>
          <span className="countdown">
            <span style={{ '--value': timeLeft.minutes }}>
              {timeLeft.minutes}
            </span>
          </span>
          <span className="label">min</span>
        </TimeUnit>
        <TimeUnit>
          <span className="countdown">
            <span style={{ '--value': timeLeft.seconds }}>
              {timeLeft.seconds}
            </span>
          </span>
          <span className="label">sec</span>
        </TimeUnit>
      </div>
    </TimerContainer>
  );
};

Product.Availability = function Availability({ stock }) {
  return (
    <StyledParagraph stock={stock}>
      {/* {stock ? `${stock} in stock` : 'Out of stock!'} */}
      {stock ? (
        <div className="flex_items align_middle g_1 text-[#33b63b]">
          <CheckCircle />

          <span>Available to order</span>
        </div>
      ) : (
        <div className="text-[#f00]">Out of stock</div>
      )}
    </StyledParagraph>
  );
};

Product.AddToCart = function ProductAddToCart({
  stock,
  colors,
  specific_product,
}) {
  console.log(specific_product);

  const { quantity, setQuantity } = useContext(ProductContext);
  const { add_to_cart } = useCartContext();
  const [main_color, set_main_color] = useState(colors[0]);
  const { id = 'recQ0fMd8T0Vk211E', images = [] } = specific_product;
  // console.log(hex_color_to_string(main_color));

  return (
    <AddToCartContainer>
      <div className="stock_and_colors flex_items align_middle ">
        {/* <span className="num_of_items_in_stock text_xs">
          {stock} items available
        </span> */}
        <div className="product_colors flex_items g_1">
          {colors.map((color, index) => {
            return (
              <ColorWrapper
                key={index}
                is_active={color === main_color}
                onClick={() => set_main_color(color)}
                style={{ backgroundColor: color }}
                className="flex_items align_middle align_horizontal "
              >
                {/* <FaCheck /> */}
                <Check />
              </ColorWrapper>
            );
          })}
        </div>
      </div>
      <div className="quantity_and_add_to_cart_btn flex_items align_middle g_1">
        <QuantitySelector>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </button>
          {/* <input type="number" value={quantity} readOnly /> */}
          <div className="quantity flex_items align_middle align_horizontal">
            {quantity}
          </div>
          <button
            onClick={() =>
              setQuantity((prev) => {
                let temp_quantity = prev + 1;
                if (temp_quantity > stock) temp_quantity = stock;
                // console.log(temp_quantity);
                return temp_quantity;
              })
            }
          >
            +
          </button>
        </QuantitySelector>
        <StyledLink
          to="/cart"
          className="primary flex_items align_middle align_horizontal"
          //we want to send the main_color, quantity(amount of items ), id, and the whole specific product
          onClick={() => {
            console.log(specific_product);
            add_to_cart(id, main_color, quantity, specific_product);
          }}
        >
          ADD TO CART
        </StyledLink>
        <div className="btn btn-outline btn-primary rounded-none flex_items align_middle align_horizontal">
          <Heart />
        </div>
      </div>
      <StyledLink
        to="/cart"
        className="secondary flex_items align_middle align_horizontal"
      >
        BUY NOW
      </StyledLink>
    </AddToCartContainer>
  );
};

Product.ImportantInfo = function ImportantInfo({ sku, category, tags }) {
  const social_media_elements = social_media_links.map((link) => {
    const { id, icon, url } = link;
    return (
      <StyledIcon key={id} to={url}>
        {icon}
      </StyledIcon>
    );
  });

  const tag_elements = [{ id: 1, tags: 'Minimal Furniture' }].map((tag) => (
    <span key={tag.id}>{tag.tags}</span>
  ));
  return (
    <ImportantInfoWrapper>
      <div className="sku">
        SKU: <span className="actual_info">{sku || 10}</span>
      </div>
      <div className="category flex_items g_1">
        category: <span className="actual_info">{category}</span>
      </div>
      <div className="tags flex_items g_1">
        <span>Tags: </span>
        <div className="actual_info"> {tag_elements}</div>
      </div>
      <div className="share flex_items g_1">
        <span>Share: </span>
        <div className="social_media flex_items g_1 align_middle">
          {social_media_elements}
        </div>
      </div>
    </ImportantInfoWrapper>
  );
};

// Product.ImportantInfo = ImportantInfo;
