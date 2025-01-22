import React from 'react';
import Tag from '../ui/Tag.component';
import styled from 'styled-components';

const SectionHeaderContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 1.6rem; */
  text-align: ${({ position }) => position || 'center'};

  h2 {
    text-transform: capitalize;
    margin-top: -0.5rem;
    color: ${({ theme, position, header_color }) =>
      header_color
        ? header_color
        : position === 'left'
        ? theme.colors.grey[300]
        : theme.colors.secondary};
    //   position === 'left'
    //     ? theme.colors.grey[300]
    //     : header_color
    //     ? header_color
    //     : theme.colors.secondary};
  }
`;

function Section_header({
  tag,
  h2,
  position = 'center',
  header_color,
  other_class,
}) {
  return (
    <SectionHeaderContainer
      position={position}
      header_color={header_color}
      className={`mb_24 ${other_class}`}
    >
      <Tag>{tag}</Tag>
      <h2 className="text-primary heading_one mt_16">{h2}</h2>
    </SectionHeaderContainer>
  );
}

export default Section_header;
