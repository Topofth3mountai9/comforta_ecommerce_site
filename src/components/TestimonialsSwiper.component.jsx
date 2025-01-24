import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { testimonials } from '../data';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { respond_to } from '../helpers/breakpoints';

const TestimonialContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* padding: 4rem; */
  padding-inline-start: 9rem;
  border-radius: 1rem;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  background-color: ${({ theme }) => theme.colors.grey[100]};
  overflow: visible;

  ${respond_to('900')} {
    flex-direction: column;
    padding: 4rem;
    gap: 1rem;
    /* padding-inline-start: 4rem; */
    padding-inline: 4rem;
  }
`;

const TestimonialImgWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 20rem;
  width: 20rem;
  z-index: 1;
  overflow: visible;

  .testimonial_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.4);
    border-radius: 5%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  ${respond_to('900')} {
    order: 2;
    height: 7rem;
    width: 7rem;
    align-self: center;
    margin-top: 1rem;

    .testimonial_img {
      transform: none;
      border-radius: 50%;
    }
  }

  ${respond_to('600')} {
    height: 6rem;
    width: 6rem;
  }
`;

const TestimonialInfo = styled.div`
  flex: 1;
  z-index: 2;
  text-align: left;
  /* color: ${({ theme }) => theme.colors.grey[0]}; */
  color: ${({ theme }) => theme.colors.black.black_500};
  display: flex;
  flex-flow: column wrap;
  margin-left: 8rem;
  position: relative;

  p {
    font-size: ${({ theme }) => theme.typography.text.small};
    font-weight: 600;
    /* color: ${({ theme }) => theme.colors.black.black_500}; */
    margin-bottom: 2rem;
    width: 70%;
    position: relative;
    line-height: 1.7;
  }

  .customer_name {
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.text.xxs};
    color: ${({ theme }) => theme.colors.grey[400]};
    text-transform: capitalize;
    letter-spacing: 0.09rem;
  }

  .customer_occupation {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey[400]};
  }

  svg {
    height: 8rem;
    width: 8rem;
    /* color: ${({ theme }) => theme.colors.light_primary}; */
    /* color: ${({ theme }) => theme.colors.accent}; */
    color: ${({ theme }) => theme.colors.brand_primary_light[300]};
    position: absolute;
    /* top: -2.5rem;
    right: -4.5rem; */
    top: -2.5rem;
    right: 4.5rem;

    @media all and (width > 900px) {
      right: 16.5rem;
    }
  }

  ${respond_to('900')} {
    order: 1;
    text-align: center;
    width: 100%;
    margin-left: 0;

    p {
      font-size: ${({ theme }) => theme.typography.text.small} !important;
      font-weight: 500;
      width: 100%;
      margin-bottom: 1rem;
    }

    svg {
      /* position: static; */
      /* display: block; */
      /* margin: 0 auto 1rem; */
    }

    .customer_name,
    .customer_occupation {
      display: none;
    }
  }
`;

const CustomerInfo = styled.div`
  display: none;

  ${respond_to('900')} {
    /* display: block; */
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    margin-top: 1rem;
    order: 3;

    .customer_name {
      font-weight: bold;
      font-size: ${({ theme }) => theme.typography.text.xxs};
      text-transform: capitalize;
      letter-spacing: 0.09rem;
    }

    .customer_occupation {
      font-size: 1rem;
    }
  }
`;

function TestimonialsSwiper() {
  const testimonial_elements = testimonials.map((testimonial) => {
    const { id, image, testimony, name } = testimonial;
    return (
      <SwiperSlide key={id} className="custom_slide">
        <TestimonialContent className="testimonial_content">
          <TestimonialImgWrapper className="testimonial_img_wrapper">
            <img
              src={image}
              className="testimonial_img"
              alt={`${name}'s testimony`}
            />
          </TestimonialImgWrapper>
          <TestimonialInfo>
            {/* <FaQuoteRight /> */}
            <BiSolidQuoteLeft />
            <p>{testimony}</p>
            <span className="customer_name">{name}</span>
            <span className="customer_occupation">customer</span>
          </TestimonialInfo>
          <CustomerInfo className="s ">
            <span className="customer_name">{name}</span>
            <span className="customer_occupation">customer</span>
          </CustomerInfo>
        </TestimonialContent>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 1000000000 }}
      navigation
      pagination={{ clickable: true }}
      loop
      // style={{ overflow: 'visible' }}
      slidesPerView={1}
      // centeredSlides={true}
      spaceBetween={10}
    >
      {testimonial_elements}
    </Swiper>
  );
}

export default TestimonialsSwiper;
