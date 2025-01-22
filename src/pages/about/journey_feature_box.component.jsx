import React from 'react';
import styled, { css } from 'styled-components';
import { respond_to } from '../../helpers/breakpoints';

const Wrapper = styled.div`
  .info {
    justify-content: space-evenly;
    width: 96%;

    & > .descendant {
      margin-left: 3rem;
    }
  }
`;

const Img = styled.img`
  ${({ index, theme }) =>
    index % 2 === 0 &&
    css`
      border-top-right-radius: ${theme.border_radius.pill};
      border-bottom-right-radius: ${theme.border_radius.pill};
    `}
  ${({ index, theme }) =>
    index % 2 !== 0 &&
    css`
      border-top-left-radius: ${theme.border_radius.pill};
      border-bottom-left-radius: ${theme.border_radius.pill};
    `}
`;

const ImgWrapper = styled.div`
  width: 100rem;
  height: 30rem;
  border: ${({ theme }) => `2rem solid ${theme.colors.secondary}`};
  order: ${({ index }) => (Number(index) % 2 === 0 ? 1 : -1)};
  margin-top: -2rem;

  ${({ index, theme }) =>
    index % 2 !== 0 &&
    css`
      border-right: none;
      border-top-left-radius: ${theme.border_radius.pill};
      border-bottom-left-radius: ${theme.border_radius.pill};
      order: -1;
    `};

  ${({ index, theme }) =>
    index % 2 === 0 &&
    css`
      border-left: none;
      border-top-right-radius: ${theme.border_radius.pill};
      border-bottom-right-radius: ${theme.border_radius.pill};
      order: 1;
    `};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* ${(props) => console.log(props)} */
  }

  ${respond_to('800')} {
    /* height: 20rem; */
    display: none;
  }
  ${respond_to('450')} {
    display: none;
  }
`;

const IconWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.colors.light_primary};
  padding: 1rem;
  margin: 0;
  border-radius: ${({ theme }) => theme.border_radius.md};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function Journey_feature_box({ image, title, paragraph, icon, index }) {
  console.log(index);
  return (
    <Wrapper className="flex_items ">
      <ImgWrapper index={index}>
        <Img index={index} src={image} alt={`image ${image.split('/')[3]}`} />
      </ImgWrapper>
      <div className="info flex_items flex_column">
        <IconWrapper className=" descendant flex_items align_middle align_horizontal">
          {icon}
        </IconWrapper>
        <h3 className=" descendant ">{title}</h3>
        <p className=" descendant text-[#767676]">{paragraph}</p>
      </div>
    </Wrapper>
  );
}

export default Journey_feature_box;
