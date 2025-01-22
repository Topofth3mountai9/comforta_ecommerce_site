import React from 'react';
import OurContainer from './OurContainer.component';
import { Hero_custom } from '../ui/hero_custom.component';
import styled from 'styled-components';
import Section_header from './section_header.component';
import { Diamond, Gem, HeartHandshake, Leaf, PenTool } from 'lucide-react';

const Choose_us_container = styled.div`
  width: 100%;
  min-height: 90vh;
`;

function Choose_us() {
  return (
    <Choose_us_container>
      <OurContainer>
        <Hero_custom
          backgroundImage="/choose_us/interior_design.jpg"
          height="90vh"
          overlayOpacity={0.7}
        >
          <Hero_custom.Content position="left">
            <Section_header
              tag="reasons"
              h2="Why you should choose us"
              position="left"
            />
            <Hero_custom.Grid>
              <Hero_custom.Card className="flex_items align_middle g_1">
                <Hero_custom.Icon>
                  <Gem />
                </Hero_custom.Icon>
                <div className="info">
                  <Hero_custom.Subtitle>
                    Quality craftsmanship
                  </Hero_custom.Subtitle>
                  <Hero_custom.Paragraph>
                    Expertly crafted for durability and timeless beauty.
                  </Hero_custom.Paragraph>
                </div>
              </Hero_custom.Card>
              <Hero_custom.Card className="flex_items g_1">
                <Hero_custom.Icon>
                  <PenTool />
                </Hero_custom.Icon>
                <div className="info">
                  <Hero_custom.Subtitle>
                    Customization options
                  </Hero_custom.Subtitle>
                  <Hero_custom.Paragraph>
                    Tailored to fit your unique style and space.
                  </Hero_custom.Paragraph>
                </div>
              </Hero_custom.Card>
              <Hero_custom.Card className="flex_items g_1">
                <Hero_custom.Icon>
                  <HeartHandshake />
                </Hero_custom.Icon>
                <div className="info">
                  <Hero_custom.Subtitle>
                    Exceptional Service
                  </Hero_custom.Subtitle>
                  <Hero_custom.Paragraph>
                    Personalized consultations and hassle-free delivery.
                  </Hero_custom.Paragraph>
                </div>
              </Hero_custom.Card>
              <Hero_custom.Card className="flex_items g_1">
                <Hero_custom.Icon>
                  <Leaf />
                </Hero_custom.Icon>
                <div className="info">
                  <Hero_custom.Subtitle>
                    Sustainable practices
                  </Hero_custom.Subtitle>
                  <Hero_custom.Paragraph>
                    Eco-friendly materials and production methods.
                  </Hero_custom.Paragraph>
                </div>
              </Hero_custom.Card>
            </Hero_custom.Grid>
            {/* <Hero_custom.Title>Why You Should Choose Us</Hero_custom.Title> */}
            {/* <Hero_custom.Subtitle>
              We are a team of experienced professionals who are dedicated to
              providing you with the best service possible.
            </Hero_custom.Subtitle> */}
          </Hero_custom.Content>
        </Hero_custom>
      </OurContainer>
    </Choose_us_container>
  );
}

export default Choose_us;
