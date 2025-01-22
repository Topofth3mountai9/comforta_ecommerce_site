import styled from 'styled-components';
import { about_page_testimonials } from '../../data';

import { FaQuoteLeft } from 'react-icons/fa6';
import { respond_to } from '../../helpers/breakpoints';

const TestimonialsContainer = styled.div`
  padding-block-end: 3rem;

  .section_heading {
    // font-size: global.$heading_xl;
    margin-block: 7rem;
    text-transform: capitalize;
  }
  .all_testimonials {
    display: flex;
    justify-content: space-between;
    gap: 12rem;
    padding-block-start: 4.8rem;
    // padding-inline: 10rem;
    width: 100%;
    margin-inline: auto;
  }

  ${respond_to('1100')} {
    .all_testimonials {
      flex-direction: column;
    }
  }
`;

const TestimonialContainer = styled.div`
  /* width: 50rem; */
  /* height: 22rem; */
  padding-block: 5rem 3rem;
  padding-inline: 3rem 3rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.border_radius.md};
  /* color: ${({ theme }) => theme.colors.grey[300]}; */
  color: ${({ theme }) => theme.colors.brand_secondary_light[400]};

  /* .section_heading {
    text-transform: capitalize;
    /* text-align: center; */
  .name {
    font-size: ${({ theme }) => theme.typography.text.md};
    /* color: ${({ theme }) => theme.colors.grey[200]}; */
    color: ${({ theme }) => theme.colors.brand_secondary_light[300]};
  }

  .position {
    /* color: ${({ theme }) => theme.colors.grey.light}; */
    color: ${({ theme }) => theme.colors.brand_secondary_light[500]};
    margin-block: 1.5rem 2rem;
    /* font-size: ${({ theme }) => theme.typography.text.small}; */
    font-size: ${({ theme }) => theme.typography.text.tiny};
  }

  .testimony {
    color: ${({ theme }) => theme.colors.brand_secondary_light[200]};
  }

  .testimonial_img_wrapper {
    width: 20rem;
    height: 11.7rem;
    position: absolute;
    top: -7rem;
    right: 4rem;
    border-radius: ${({ theme }) => theme.border_radius.sm};

    .testimonial_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.border_radius.sm};
    }
  }
  //responsive mode
  ${respond_to('1200')} {
    .all_testimonials {
      width: 90% !important;
    }
  }
  ${respond_to('1100')} {
    .all_testimonials {
      width: 95% !important;
    }
  }
  ${respond_to('900')} {
    .all_testimonials {
      width: 60% !important;
      flex-flow: column wrap;
      gap: 4rem;
    }
  }
  ${respond_to('600')} {
    width: 40rem;
  }

  ${respond_to('450')} {
    width: 30rem;
    .testimonial_img_wrapper {
      /* width: 15rem; */
      top: -8rem;
      right: 4rem;
    }

    .all_testimonials {
      gap: 20rem !important;
      width: 70% !important;
    }
  }
`;

// .testimonials_container {
//   // min-height: 90vh;

// }

function Testimonial({ id, img, location, testimony, name }) {
  return (
    <>
      <TestimonialContainer className="testimonial_container flex_items flex_column align_horizontal align_middl position_relative">
        <h3 className="name">{name}</h3>
        <h4 className="position">{location}</h4>
        <FaQuoteLeft className="quote_svg" />
        <p className="testimony">{testimony}</p>
        <div className="testimonial_img_wrapper">
          <img
            src={img}
            alt={`${img.split('/')[-1]}`}
            className="testimonial_img"
          />
        </div>
      </TestimonialContainer>
    </>
  );
}

function Testimonials() {
  const testimonial_elements = about_page_testimonials.map((testimonial) => {
    return <Testimonial key={testimonial.id} {...testimonial} />;
  });
  return (
    <section className="bg_dark_ligh">
      <div className="container ">
        <TestimonialsContainer className="testimonials_container} flex_items flex_column">
          <h2 className="section_heading mb_32 text_center">
            Don't take our word,
            <br />
            see what clients say
          </h2>
          <div className="all_testimonials flex_items align_middle align_horizontal g_ mt_48">
            {testimonial_elements}
          </div>
          {/* <Section_bottom
            header_text="client"
            bottom_text="says"
            other_class={styles.section_bottom}
          /> */}
        </TestimonialsContainer>
      </div>
    </section>
  );
}

export default Testimonials;
