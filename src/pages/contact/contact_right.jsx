import React from 'react';
import styled from 'styled-components';
import ContactForm from './contact_form';

const ContactRightContainer = styled.div``;

function ContactRight() {
  return (
    <ContactRightContainer>
      <ContactForm />
    </ContactRightContainer>
  );
}

export default ContactRight;
