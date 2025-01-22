import React from 'react';
import styled from 'styled-components';
import ContactLeft from './contact_left';
import ContactRight from './contact_right';
import { respond_to } from '../../helpers/breakpoints';

const ContactContentWrapper = styled.div`
  width: 80%;
  margin-inline: auto;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  ${respond_to('678')} {
    grid-template-columns: 1fr;
  }
`;

function Contact_content() {
  return (
    <ContactContentWrapper className="mt_48">
      <ContactLeft />
      <ContactRight />
    </ContactContentWrapper>
  );
}

export default Contact_content;
