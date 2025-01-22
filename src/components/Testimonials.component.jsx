import React from 'react';
import OurContainer from './OurContainer.component';
import TestimonialsSwiper from './TestimonialsSwiper.component';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';
import Section_header from './section_header.component';

const TestimonialsContainer = styled.section`
  width: 100%;
  height: 80vh;
  /* margin-bottom: 4rem; */

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${respond_to('900')} {
    height: 50vh;
  }
`;

const TestimonialsContent = styled.div`
  max-width: 70%;
  margin-inline: auto;

  text-align: center;
  .paragraph {
    margin-block: 3rem 10rem;
  }

  .section_header {
    margin-bottom: 10rem;
  }
`;

function Testimonials() {
  return (
    <TestimonialsContainer className="mb_96">
      <OurContainer other_class="container">
        <TestimonialsContent>
          <Section_header
            tag="real testimonials"
            h2="What people say about us"
            other_class="section_header mb_64"
          />
          {/* <p className="paragraph text_xs ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            doloribus qui nemo earum perspiciatis fugiat quae a numquam
            quibusdam asperiores.
          </p> */}
          <TestimonialsSwiper />
        </TestimonialsContent>
      </OurContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;
