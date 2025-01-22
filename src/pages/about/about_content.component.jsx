import React from 'react';
import styled from 'styled-components';
import JourneyStory from './journey_story.component';
import OurContainer from '../../components/OurContainer.component';
import Team from './team';
import Testimonials from './testimonials';

const AboutWrapper = styled.div`
  width: 80%;
  margin-inline: auto;
  margin-top: 8rem;
`;

function About_content() {
  return (
    <OurContainer>
      <AboutWrapper>
        <JourneyStory />
        <Team />
        <Testimonials />
      </AboutWrapper>
    </OurContainer>
  );
}

export default About_content;
