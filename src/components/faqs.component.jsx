import React from 'react';
import Section_header from './section_header.component';
import { theme } from '../styles/theme';
import { faqs } from '../data';
import styled from 'styled-components';

const FaqContainer = styled.div`
  .collapse-title {
    font-size: ${({ theme }) => theme.typography.text.tiny} !important;
  }
`;

const Wrapper = styled.div`
  .hero {
    min-height: 60vh;
  }

  .hero-content {
    max-width: 80%;
    gap: 6rem;
  }
`;

function Faqs() {
  const faq_elements = faqs.map((faq) => {
    const { id, question, answer } = faq;
    return (
      <FaqContainer
        key={id}
        className="collapse collapse-plus bg-transparent bg-[#ebebeb] rounded-md mb-6"
      >
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-[#2b2b2b]  font-bold">
          {question}
        </div>
        <div className="collapse-content text_xs">
          <p>{answer}</p>
        </div>
      </FaqContainer>
    );
  });
  return (
    <Wrapper className="mb_96">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/faq/support_team.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            {/* <h1 className="text-5xl font-bold">Box Office News!</h1>
             */}
            <Section_header
              tag="popular faqs"
              h2="Discover FAQ's From our Support Team"
              position="left"
              header_color={theme.colors.secondary}
            />
            <div className="faqs">{faq_elements}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faqs;
