import Masonry from 'react-masonry-css';
import styled from 'styled-components';

const StyledMasonry = styled(Masonry)`
  display: flex;
  width: 100%;
  margin-left: -2rem; /* Compensate for gap */

  .masonry-column {
    padding-left: 2rem;
    background-clip: padding-box;
  }
`;

const MasonryItem = styled.div`
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const MasonryGallery = ({ images }) => {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <StyledMasonry
      breakpointCols={breakpointColumns}
      className="masonry-grid"
      columnClassName="masonry-column"
    >
      {images.map((image, index) => (
        <MasonryItem key={index}>
          <img src={image.url} alt={image.alt || 'Gallery image'} />
        </MasonryItem>
      ))}
    </StyledMasonry>
  );
};

export default MasonryGallery;
