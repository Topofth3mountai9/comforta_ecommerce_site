import React from 'react';
import styled from 'styled-components';
import { journey_story_info } from '../../data';
import Journey_feature_box from './journey_feature_box.component';

const JourneyStoryWrapper = styled.div`
  p {
    margin-bottom: 3rem;
  }
`;

const Header = styled.div`
  text-align: center;
  h2 {
    font-weight: 500;
    text-transform: capitalize;
  }
  p {
    /* color: ${({ theme }) => theme.colors.grey[600]} */
    width: 70%;
    margin-inline: auto;
  }
`;

function JourneyStory() {
  const journey_story_feature_elements = journey_story_info.map(
    (box, index) => (
      <Journey_feature_box key={index} {...box} index={index + 1} />
    )
  );
  return (
    <JourneyStoryWrapper>
      <Header>
        <h2 className="mb_24">The Comforta Journey Story</h2>
        <p className="text-[#767676] mb_96">
          The comforta journey: Transforming spaces with innovative design.
          Explore our story of craftsmanship and style, creating furniture that
          inspires and enhances modern living.
        </p>
      </Header>
      <div className="journey_story_feature_box">
        {journey_story_feature_elements}
      </div>
    </JourneyStoryWrapper>
  );
}

export default JourneyStory;
