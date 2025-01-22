import React from 'react';
import MasonryGallery from '../ui/masonry_gallery.component';
import { gallery } from '../data';
import styled from 'styled-components';
import Section_header from './section_header.component';
import OurContainer from './OurContainer.component';

const GalleryContainer = styled.div``;

const GalleryContent = styled.div`
  width: 80%;
  margin-inline: auto;
`;

function Gallery() {
  return (
    <GalleryContainer>
      <OurContainer other_class="container">
        <GalleryContent>
          <Section_header
            tag="@namefurniture"
            h2="Our Instagram"
            other_class="section_header mb_64"
          />
          <MasonryGallery images={gallery} />
        </GalleryContent>
      </OurContainer>
    </GalleryContainer>
  );
}

export default Gallery;
