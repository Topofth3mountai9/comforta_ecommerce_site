import React from 'react';
import CustomerReviews from '../ui/customer_reviews_vo';
import styled from 'styled-components';

const sample_data = {
  total: 7900,
  average: 4.7,
  distribution: {
    5: 65,
    4: 15,
    3: 7,
    2: 8,
    1: 5,
  },
};

const ReviewWrapper = styled.div``;

function Review() {
  return (
    <ReviewWrapper>
      <CustomerReviews ratings={sample_data} />
    </ReviewWrapper>
  );
}

export default Review;
