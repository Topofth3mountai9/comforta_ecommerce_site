import React from 'react';
import Contact_content from './contact_content';
import styled from 'styled-components';
import Breadcrumb from '../../ui/breadcrumb.component';
import { HiOutlineChevronRight } from 'react-icons/hi';

const ContactWrapper = styled.div`
  width: 100%;
`;

function Contact() {
  return (
    <ContactWrapper className="page">
      <Breadcrumb current_page="contact" svg={<HiOutlineChevronRight />} />
      <Contact_content />
    </ContactWrapper>
  );
}

export default Contact;
