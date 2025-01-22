import React from 'react';
import styled from 'styled-components';
import OurContainer from './OurContainer.component';
import Tab from '../ui/tab';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import Description from './description.component';
import Similar_items from './similar_items.component';
import Frequently_viewed from './frequently_viewed.component';
import Product_information from './product_information.component';
import Review from './review.component';

const SinglePageMoreContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.containers.max_width_sm};
  margin-inline: auto;
  height: 100%;
`;

const SinglePageMoreContent = styled.div`
  width: 100%;
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  /* gap: 2rem; */
`;

function Single_page_more() {
  return (
    <SinglePageMoreContainer>
      {/* <OurContainer> */}
      <SinglePageMoreContent>
        {/* <MoreInfoTabs /> */}
        {/* <Warranty_and_support /> */}
        <Tab
          tabs={[
            {
              key: 0,
              title: 'Description',
              content: (
                <>
                  <Description />
                  <Similar_items />
                  <Frequently_viewed />
                </>
              ),
              // content: <BiHeart />,
            },
            {
              key: 1,
              title: 'Product Information',
              content: (
                <>
                  <Product_information />
                  <Similar_items />
                  <Frequently_viewed />
                </>
              ),
            },
            {
              key: 2,
              title: 'Review',
              content: (
                <>
                  <Review />
                  <Similar_items />
                  <Frequently_viewed />
                </>
              ),
            },
          ]}
        >
          <Tab.Tags />
          <Tab.Content />
        </Tab>
      </SinglePageMoreContent>
      {/* </OurContainer> */}
    </SinglePageMoreContainer>
  );
}

export default Single_page_more;
