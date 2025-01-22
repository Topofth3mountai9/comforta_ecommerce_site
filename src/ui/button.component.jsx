import React from 'react';
import styled from 'styled-components';
let button_types = {
  dark: {
    background: 'transparent',
    color: '#dba81b',
    border: '.2rem solid #dba81b',
  },
  light: { background: '#FFFFFF', color: '#f8872b' },
  other: {
    background: 'none',
    color: '#f8872b',
    border: '0.3rem solid #f8872b',
  },
  diff: { background: '#0b3954', color: '#fff' },
  transparent: {
    background: 'transparent',
    color: '#fff',
    border: '.3rem solid #fff',
  },

  primary: {
    background: '#c49b63',
    border: '.1rem solid #c49b63',
    color: '#222',
    hover_color: '#c49b63',
    hover_background: 'transparent',
    hover_border: '.1rem solid #c49b63',
  },
  transparent_dark: {
    background: 'transparent',
    border: '.1rem solid #c49b63',
    color: '#c49b63',
    hover_color: '#222',
    hover_background: '#c49b63',
    hover_border: '.1rem solid #c49b63',
  },
  transparent_light: {
    background: 'transparent',
    border: '.1rem solid #fff',
    color: '#fff',
    hover_color: '#222',
    hover_background: '#c49b63',
    hover_border: '.1rem solid #c49b63',
  },
  fully_transparent: {
    background: 'transparent',
    color: '#2a2727',
    hover_color: '#c496b3',
  },
};
//we are conditionally changing the background, color, border, size, shape
const StyledButton = styled.button`
  position: relative;

  font-size: ${({ theme }) => theme.typography.text.xs};
  /* text-transform: uppercase; */
  text-transform: ${({ text }) =>
    text === 'uppercase' ? 'uppercase' : 'capitalize'};
  letter-spacing: 0.1rem;

  //changing size dynamically
  padding: ${({ size }) => (size === 'big' ? '0.8em 1.6em' : '0.3em 1em')};
  //changing the background dynamically
  background: ${({ type }) => button_types[type]?.background || 'transparent'};
  //changing the color dynamically
  color: ${({ type }) => button_types[type]?.color || '#FFF'};
  //changing the border dynamically
  border: ${({ type }) => button_types[type]?.border || 'none'};

  //changing shape dynamically
  border-radius: ${({ square, theme }) =>
    square ? '0' : theme.border_radius.md};

  &:hover {
    background: ${({ type }) =>
      button_types[type]?.hover_background || 'transparent'} !important;
    color: ${({ type }) =>
      button_types[type]?.hover_color || '#fff'} !important;
    border: ${({ type }) =>
      button_types[type]?.hover_border || 'none'} !important;
  }
`;

function Button({
  type,
  children,
  size = 'small',
  square = false,
  text = 'uppercase',
}) {
  return (
    <StyledButton
      type={type}
      size={size}
      square={square}
      text={text}
      className=" flex_items align_middle align_horizontal"
      style={button_types[type]}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
