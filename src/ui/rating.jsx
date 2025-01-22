import { Star } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StarIcon = styled(Star)`
  width: 16px;
  height: 16px;
  margin-right: 2px;
  fill: ${(props) => (props.filled ? '#FFD700' : '#E0E0E0')};
  color: ${(props) => (props.filled ? '#FFD700' : '#E0E0E0')};
`;

function Rating({ rating }) {
  return (
    <RatingWrapper>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < rating} />
      ))}
    </RatingWrapper>
  );
}

export default Rating;
