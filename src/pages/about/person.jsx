import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PersonWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey.d};
  border-radius: ${({ theme }) => theme.border_radius.md};
  padding: 1.5rem;
  gap: 0.8rem;

  &:hover {
    .info {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.grey[0]};
    }
    .position {
      color: ${({ theme }) => theme.colors.grey[400]};
    }
    .icon_wrapper {
      background: ${({ theme }) => theme.colors.grey.d};
    }
  }
`;

const ImageWrapper = styled.div`
  width: 25rem;
  height: 30rem;
  background: ${({ theme }) => theme.colors.grey.f};
  border-radius: ${({ theme }) => theme.border_radius.md};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.border_radius.md};
  }
`;

const Info = styled.div`
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.grey[0]};
  border-radius: ${({ theme }) => theme.border_radius.md};
  transition: all 0.3s;

  .name {
    text-transform: capitalize;
    font-weight: 600;
  }

  .position {
    color: ${({ theme }) => theme.colors.grey.e};
  }
`;

const IconWrapper = styled(Link)`
  height: 2.5rem;
  width: 2.5rem;

  background: ${({ theme }) => theme.colors.grey.d};
  border-radius: 50%;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function Person({ image, name, position, social_media_links, icons }) {
  console.log(social_media_links);
  const [first, second] = social_media_links;
  console.log(first);
  const { icon: first_icon, url: first_url } = first;
  const { icon: second_icon, url: second_url } = second;
  return (
    <PersonWrapper className="flex_items flex_column">
      <ImageWrapper>
        <img src={image} alt={name} />
      </ImageWrapper>
      <Info className="info flex_items align_middle">
        <div className="name_and_position flex_items flex_column">
          <span className="name heading_5">{name}</span>
          <span className="position text_xs">{position}</span>
        </div>
        <div className="socials flex_items item_end g_1">
          <IconWrapper
            to={first_url}
            className="icon_wrapper flex_items align_middle align_horizontal"
          >
            {first_icon}
          </IconWrapper>
          <IconWrapper
            to={second_url}
            className="flex_items align_middle align_horizontal"
          >
            {second_icon}
          </IconWrapper>
        </div>
      </Info>
    </PersonWrapper>
  );
}

export default Person;
