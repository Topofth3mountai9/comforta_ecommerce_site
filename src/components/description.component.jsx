import React from 'react';
import styled from 'styled-components';
import { about_item_descriptions } from '../data';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';

const DescriptionWrapper = styled.div`
  h3 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black.light};
    margin-block: 2.5rem 2rem;
  }
`;

const AboutItemDescriptionWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  info {
    color: ${({ theme }) => theme.colors.black.base};
  }
`;

function Description() {
  const about_item_elements = about_item_descriptions.map((description) => {
    const { id, info } = description;
    return (
      <AboutItemDescriptionWrapper key={id}>
        <HiOutlineChevronDoubleRight /> <span className="info">{info}</span>
      </AboutItemDescriptionWrapper>
    );
  });
  return (
    <DescriptionWrapper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur
        provident consequuntur nulla labore, repellendus id. Beatae aliquam
        numquam, ad at minus perspiciatis consequuntur suscipit reiciendis unde
        veniam cumque dolor.
      </p>
      <h3 className="mb_24">About this Item</h3>
      <div className="about_item flex_items flex_column g_1">
        {about_item_elements}
      </div>
    </DescriptionWrapper>
  );
}

export default Description;
