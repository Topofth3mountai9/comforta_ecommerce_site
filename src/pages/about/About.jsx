import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../../ui/breadcrumb.component';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Hero from '../../components/hero.component';
import About_content from './about_content.component';
import { theme } from '../../styles/theme';
import Section_header from '../../components/section_header.component';
const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /*display: flex;
  justify-content: center;
  align-items: center; */

  .hero {
    min-height: 70vh;
  }

  .hero-content {
    max-width: 80%;
    gap: 10rem;
  }

  .about_paragraph {
    line-height: 1.8;
    width: 95%;
  }
`;

function About() {
  return (
    <AboutContainer>
      <Breadcrumb current_page="about" svg={<HiOutlineChevronRight />} />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/hero3.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
            <Section_header
              tag="our story"
              h2="Comforta's journey"
              position="left"
              header_color={theme.colors.secondary}
            />
            <p className="py-6 text-[#767676]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam error at alias minima, a commodi aliquid, ratione
              tempore quaerat aliquam dolorum. Accusantium, ad aperiam? Impedit
              blanditiis, maxime odio dignissimos commodi delectus ipsa maiores
              veniam laboriosam similique quam nostrum, aut fugit
            </p>
          </div>
        </div>
      </div>
      <About_content />
    </AboutContainer>
  );
}

export default About;

{
  /* <Hero
        img={'/images/hero2.webp'}
        // title="Our Story"
        // description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto."
        button={false}
      /> */
}

{
  /* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/hero3.webp"
            className="max-w-s rounded-lg shadow-2xl"
            style={{ flex: '1' }}
          />
          <div style={{ flex: '1' }}>
            <Section_header
              tag="our story"
              h2="Comforta's journey"
              position="left"
              header_color={theme.colors.secondary}
            />
            <p className="about_paragraph text-[#767676]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam error at alias minima, a commodi aliquid, ratione
              tempore quaerat aliquam dolorum. Accusantium, ad aperiam? Impedit
              blanditiis, maxime odio dignissimos commodi delectus ipsa maiores
              veniam laboriosam similique quam nostrum, aut fugit.
            </p>
          </div>
        </div>
      </div> */
}
