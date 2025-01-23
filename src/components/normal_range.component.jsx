import React from 'react';
import styled from 'styled-components';

const RangeWrapper = styled.input`
  width: 90%;
`;

function Normal_range({ min, max, handle_change, value }) {
  console.log(min, max);
  return (
    <RangeWrapper
      type="range"
      name="range"
      min={min}
      max={max}
      id="range"
      value={value}
      onChange={handle_change}
    ></RangeWrapper>
  );
}

export default Normal_range;
