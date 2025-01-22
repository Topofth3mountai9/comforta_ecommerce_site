import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  .hero-content {
    align-items: flex-start !important;
  }

  p {
    text-align: start !important;
    letter-spacing: 0.02rem;
    line-height: 2;
  }
`;

const HeroImgWrapper = styled.div`
  width: 85%;
  /* width: 40rem; */
  height: 75%;
  hero_img {
    width: 100%;
    height: 100%;
  }
`;

function Hero({ img, title, description, button = false, button_text }) {
  return (
    <HeroContainer className="hero page_100 bg-stone-100">
      <div className="hero-content grid md:grid-cols-2 gap-0 max-w-[70%]">
        <HeroImgWrapper className="">
          <img
            src={img}
            className="hero_img rounded-lg shadow-2xl"
            alt="Hero"
          />
        </HeroImgWrapper>
        <div className="order-2">
          <h1 className="text-5xl font-bold leading-normal text_primary">
            {title}
          </h1>
          <p className="py-6 text-gray-500 max-w-[95%] line-height-2">
            {description}
          </p>
          {button && (
            <button className="btn btn-primary mt-4">{button_text}</button>
          )}
        </div>
      </div>
    </HeroContainer>
    // <HeroContainer className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row gap-24 max-w-[80%]">
    //     <img src={img} className="w-full rounded-lg shadow-2xl" />
    //     <div>
    //       <h1 className="text-5xl font-bold text_primary">{title}</h1>
    //       <p
    //         className="py-6 text-gray-500 max-w-[95%]
    //       "
    //       >
    //         {description}
    //       </p>
    //       {button && (
    //         <button className="btn btn-primary rounded-md">
    //           {button_text}
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </HeroContainer>
  );
}

export default Hero;
