import styled from 'styled-components';
import { Star, StarHalf } from 'lucide-react';
import { respond_to } from '../helpers/breakpoints';

const Container = styled.div`
  padding: 1.5rem;
  max-width: 60rem;
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  /* justify-content: space-evenly; */

  .review_text_summary {
    width: 30%;
    width: 100%;
    width: 85%;
  }

  ${respond_to('550')} {
    width: 100%;

    .review_text_summary {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const RatingSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  color: #fbbf24;
  gap: 0.25rem;
`;

const RatingText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  margin-left: 0.5rem;
`;

const RatingCount = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

const RatingBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* flex: 0.7; */
  width: 70%;
  width: 85%;

  ${respond_to('550')} {
    width: 100%;
  }
`;

const RatingBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StarLabel = styled.span`
  min-width: 60px;
`;

const BarContainer = styled.div`
  flex-grow: 1;
  height: 1.25rem;
  height: 1.05rem;
  background-color: #f3f4f6;
  /* border-radius: 0.25rem; */
  border-radius: ${({ theme }) => theme.border_radius.md};
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  background-color: #fbbf24;
  width: ${(props) => props.percentage}%;
  border-radius: ${({ theme }) => theme.border_radius.md};
`;

const Percentage = styled.span`
  min-width: 45px;
  text-align: right;
`;

export default function CustomerReviews({
  ratings = {
    total: 7900,
    average: 4.7,
    distribution: {
      5: 65,
      4: 15,
      3: 7,
      2: 8,
      1: 5,
    },
  },
}) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} fill="currentColor" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="currentColor" />);
    }

    return stars;
  };

  return (
    <Container className="flex_items g_4">
      <div className="review_text_summary">
        <Title>Customer reviews</Title>
        <RatingSummary>
          <Stars>{renderStars(ratings.average)}</Stars>
          <RatingText>{ratings.average} out of 5</RatingText>
        </RatingSummary>
        <RatingCount>
          {ratings.total.toLocaleString()} global ratings
        </RatingCount>
      </div>
      <RatingBars>
        {[5, 4, 3, 2, 1].map((stars) => (
          <RatingBar key={stars}>
            <StarLabel>{stars} Star</StarLabel>
            <BarContainer>
              <BarFill percentage={ratings.distribution[stars]} />
            </BarContainer>
            <Percentage>{ratings.distribution[stars]}%</Percentage>
          </RatingBar>
        ))}
      </RatingBars>
    </Container>
  );
}

//demo
// export default function ExamplePage() {
//     const sampleData = {
//       total: 7900,
//       average: 4.7,
//       distribution: {
//         5: 65,
//         4: 15,
//         3: 7,
//         2: 8,
//         1: 5
//       }
//     }

//     return (
//       <div className="p-4">
//         <CustomerReviews ratings={sampleData} />
//       </div>
//     )
//   }
