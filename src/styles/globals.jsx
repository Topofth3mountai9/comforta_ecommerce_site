import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import MuktaRegular from './Mukta-Regular.ttf';
import KeniaRegular from './Kenia-Regular.ttf';
import SonoRegular from './Sono-Regular.ttf';
export const GlobalStyles = createGlobalStyle`

:root{
  --swiper-navigation-size: 4rem;
  --swiper-theme-color: ${theme.colors.grey[700]};
  --swiper-navigation-sides-offset: 6px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;

  @media all and (width <= 1450px) {
    // font-size: 50%;
  }
  @media all and (width <= 1200px) {
    /* font-size: 55%; */
  }
  @media all and (width <= 900px) {
    /* font-size: 50%; */
    font-size: 55%;
  }
  @media all and (width <= 600px) {
    /* font-size: 45%; */
  }
  @media all and (width <= 450px) {
    /* font-size: 37%; */
    /* font-size: 40%; */
    font-size: 50%;
  }
}

@font-face {
  font-family: 'Mukta';
  /* src: url('./Mukta-Regular.ttf'); */
  src: url(${MuktaRegular}) format('truetype');
}

@font-face {
  font-family: 'Kenia';
  src: url(${KeniaRegular}) format('truetype');
}

@font-face {
  font-family: 'Sono';
  src: url(${SonoRegular}) format('truetype');
}

body {
font-size: 1.6rem;
font-family: 'Mukta', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  color: ${theme.colors.black.base};
  //background: ${theme.colors.unknown_colors.body_bg};

  min-height: 100vh;
  max-width: 100vw;
}

.container{
max-width: ${theme.containers.max_width};
/* width:90%; */
margin-inline: auto;
}
.container_lg{
max-width: ${theme.containers.max_width_lg};
/* width:90%; */
margin-inline: auto;
}
.container_sm{
max-width: ${theme.containers.max_width_sm};
/* width:90%; */
margin-inline: auto;
}


img{
height: auto;
width: 100%;
}

.page_100 {
  min-height: calc(100vh - 10rem);
  padding-block: 5rem;
}
.page {
  min-height: calc(100vh - (20vh + 10rem));
  padding-block: 5rem;
}

svg{
height: 2.4rem;
width:2.4rem;

&:focus {
    outline: .1rem solid ${theme.colors.primary}
    }
}

a {
  text-decoration: none;
  color: ${theme.colors.black.light};
}

button {
  border: none;
  font-family: inherit;
  // font-size: 1.6rem;
  font-size: inherit;
}

hr{
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey[200]}`};
  margin-block: 1.5rem 2rem;
}

*:disabled {
  cursor: not-allowed !important;
}



.btn:focus,
input:focus,
button:focus,
textarea:focus,
select:focus {
   // outline: 2px solid ${theme.colors.primary};
  outline: none;
  // border: 2px solid ${theme.colors.primary};
  // outline-offset: -1px;
  // border-radius: ${theme.border_radius.sm};
}

//remove arrows/spinners
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


h1,
h2,
h3,
h4,
h5 {
  // margin-bottom: 2rem;
}

.heading_biggest{
font-size: ${theme.typography.heading.biggest};
line-height: .8;


}

.heading_xxl {
  font-size: ${theme.typography.heading.xxl};
  line-height: 1;
}

.heading_xl {
  font-size: ${theme.typography.heading.xl};
  line-height: 1;
}


.heading_title {
  font-size: ${theme.typography.heading.title};
  line-height: 1.05;
}

h1,
.heading_1 {
  font-size: ${theme.typography.heading.one};
  line-height: 1.1;
}
h2,
.heading_2 {
  font-size: ${theme.typography.heading.two};
  line-height: 1.2;
}
h3,
.heading_3 {
  font-size: ${theme.typography.heading.three};
  line-height: 1.3;
}
h4,
.heading_4 {
  font-size: ${theme.typography.heading.four};
  line-height: 1.4;
}
h5,
.heading_5 {
  font-size: ${theme.typography.heading.five};
  line-height: 1.5;
}
h6,
.heading_6 {
  font-size: ${theme.typography.heading.six};
  line-height: 1.6;
}

p {
  margin-bottom: 1rem;
}

ul,
li {
  list-style: none;
}

input,
  // button,
  textarea,
  select {
  font: inherit;
  color: inherit;
}

.active {
  background: ${theme.colors.primary} !important;
  color: ${theme.colors.grey[100]};
  padding: 0.6em 1.2em;
}

.btn {
  display: inline-block;
  //   padding: 1em 1.25em;
  // padding: 0.6em 1.4em;
  padding: 0.6em 1.2em;
  cursor: pointer;
  // border-radius: ${theme.border_radius.md};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
}

.btn_small {
  padding: 0.3em 1em;
}

.btn_big {
  // padding: 1.1em 1.4em;
  padding: 0.8em 1.6em;
  // padding: 1.2em 2.4em;
  // padding: 1.5em 3em;
  // padding: 1.1em 2.2em;
}

.btn_block {
  display: block;
  width: 100%;
}

.btn_rounded {
  border-radius: ${theme.border_radius.pill};
}

//tertiary_buttons hover effect
.btn_bg_tertiary {
  &:hover {
    // box-shadow: $box_shadow_inset_sm;
    border: 2px solid ${theme.colors.tertiary};
    background: transparent;
    color: ${theme.colors.black.base};
  }
}
.btn_bg_primary {
  &:hover {
    box-shadow: inset 0 0 0px 2px ${theme.colors.primary};
    // border: 2px solid ${theme.colors.primary};
    background: none !important;
    color: ${theme.colors.black.base};
  }
}

.bg_tertiary {
  background: ${theme.colors.tertiary};
  color: ${theme.colors.light_tertiary};
  letter-spacing: 0.6px;
}

.bg_primary {
  background: ${theme.colors.primary};
  // background: linear-gradient(
  //   to bottom,
  //   ${theme.colors.primary},
  //   ${theme.colors.tertiary},
  //   ${theme.colors.secondary}
  // );
  color: ${theme.colors.light_primary};
  color: ${theme.colors.black.black_500};
}

.bg_secondary {
  background: ${theme.colors.secondary};
  color: ${theme.colors.light_secondary};
}

.bg_dark_light {
  background: ${theme.colors.black.black_100};
  color: ${theme.colors.grey[0]};
}

.bg_dark {
  background: ${theme.colors.unknown_colors.body_bg};
  color: ${theme.colors.grey[0]};
}

.bg_black {
  background: ${theme.colors.black.light};
  color: ${theme.colors.grey[0]};
}

//hover effects

.flex_items {
  display: flex;
}

.flex_column {
  flex-flow: column nowrap;
}
.align_self_center {
  align-self: center;
}
.align_self_end {
  align-self: end;
}

.grid {
  display: grid;
}

.grid_1_col {
  grid-template-columns: repeat(1, 1fr);
}
.grid_2_cols {
  grid-template-columns: repeat(2, 1fr);
}
.grid_3_cols {
  grid-template-columns: repeat(3, 1fr);
}
.grid_4_cols {
  grid-template-columns: repeat(4, 1fr);
}
.grid_5_cols {
  grid-template-columns: repeat(5, 1fr);
}
.grid_6_cols {
  grid-template-columns: repeat(6, 1fr);
}

.align_middle {
  align-items: center;
}
.align_horizontal {
  justify-content: center;
}

.item_end {
  margin-left: auto;
}

.br_5 {
  border-radius: 5px;
}

.br_15 {
  border-radius: 15px;
}

.br_200 {
  border-radius: 200px;
}

.br_rounded {
  border-radius: 200px;
}

.rounded {
  border-radius: 50%;
}

//PADDING
.padding_all_around_1 {
  padding: 1.5rem;
}
.padding_all_around_2 {
  padding: 2rem;
}
.padding_all_around_3 {
  padding: 3rem;
}
.py_2 {
  padding: 2rem 0;
}

.px_2 {
  padding: 0 2rem;
}

//SPACING
.g_1 {
  gap: 1.5rem;
}

.g_2 {
  gap: 2.4rem;
}
.g_6 {
  gap: 6.4rem;
}

//bottom margin
.mb_0 {
  margin-bottom: 0;
}

.mb_16 {
  margin-bottom: 1.6rem;
}
.mb_24 {
  margin-bottom: 2.4rem;
}
.mb_32 {
  margin-bottom: 3.2rem;
}
.mb_48 {
  margin-bottom: 4.8rem;
}
.mb_64 {
  margin-bottom: 6.4rem;
}
.mb_80 {
  margin-bottom: 8rem;
}
.mb_96 {
  margin-bottom: 9.6rem;
}
.mb_120 {
  margin-bottom: 12rem;
}

.mb_128 {
  margin-bottom: 12.8rem;
}
.mb_144 {
  margin-bottom: 14.4rem;
}

//top margin
.mt_16 {
  margin-top: 1.6rem;
}
.mt_24 {
  margin-top: 2.4rem;
}
.mt_32 {
  margin-top: 3.2rem;
}
.mt_48 {
  margin-top: 4.8rem;
}
.mt_64 {
  margin-top: 6.4rem;
}
.mt_80 {
  margin-top: 8rem;
}
.mt_96 {
  margin-top: 9.6rem;
}


//text classes

.text_tiny {
  font-size: ${theme.typography.text.tiny};
  line-height: 1.7;
}

.text_xxs{
  font-size:${theme.typography.text.xxs} ;
  /* line-height: 1.7; */
}
.text_xs{
  font-size:${theme.typography.text.xs} ;
  /* line-height: 1.7; */
}

.text_small {
  font-size: ${theme.typography.text.small};
  line-height: 1.6;
}

.text_regular {
  font-size: ${theme.typography.text.regular};
  line-height: 1.5;
}

.text_medium {
  font-size: ${theme.typography.text.medium};
  line-height: 1.5;
}
.text_large {
  font-size: ${theme.typography.text.large};
  line-height: 1.4;
}

.text_center {
  text-align: center;
}

.text_black {
  color: $color_black;
}



.text_emphasis {
  color: ${theme.colors.primary};
}

.text_primary {
  color: ${theme.colors.primary};
}
.text_secondary {
  color: ${theme.colors.secondary};
}

.text_shadow {
  text-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.8);
}



.hero_heading {
  font-size: 3.7rem;
  font-weight: 700;
  line-height: 1.3;
}

.text_underline {
  background: ${theme.colors.secondary};
  width: 7rem;
  height: 0.25rem;
  margin: 0 auto;
  margin-top: 1rem;
}

//SWIPER STYLES 
.swiper{
  overflow: visible;

  overflow-x: clip;

  /* overflow-x: hidden !important;
  overflow-y: visible !important; */
  /* overflow: visible !important; */
}

/* .swiper-slide {
  overflow: visible !important; //Allow children to overflow
  position: relative; //Ensure proper positioning for absolute children
}

.swiper-wrapper {
  overflow: visible; //Allow the entire wrapper to display overflow content
} */

.custom_slide{
  /* overflow: visible !important; */
}

.swiper-slide-prev, .swiper-slide-next{
  /* display:none  !important;
  visibility: hidden !important;
  opacity:0 !important; */
}


//FORMS

form {
  // border: 1px solid ${theme.colors.grey[100]};
  // padding: 2.5rem;
  border-radius: ${theme.border_radius.md};
}

input {
  // background: ${theme.colors.grey[0]};
  background: ${theme.colors.black.light};
  // border-radius: ${theme.border_radius.md};
  // border-radius: $border_radius_lg;
  padding: 0.8rem 1.2rem;
  // padding: 0.4rem 0.8rem;
  // padding: 1.2em 2.4em;
  // padding: 1.8rem 1.8rem;
  // padding: 1.1em 1.8em;
  box-shadow: ${theme.box_shadows.sm};
  border: 1px solid ${theme.colors.grey.light};
  // border: none;
  /* color: ${theme.colors.grey[0]}; */
  color: ${theme.colors.black.black_500};
  /* width: 100%; */
  /* width: 100%; */
  font-size: ${theme.typography.text.tiny};
  font-size: 15px;
}

input[type='file'] {
  font-size: 1.4rem;
  border-radius: ${theme.border_radius.sm};

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: ${theme.border_radius.md};
    border: none;
    color: ${theme.colors.grey[0]};
    background: ${theme.colors.light_primary};
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: ${theme.colors.primary};
    }
  }
}

input::placeholder {
  /* color: ${theme.colors.grey.light}; */
  /* color: ${theme.colors.grey[0]}; */
  color: ${theme.colors.black.black_500};
  letter-spacing: 0.1rem;
  font-size: ${({ theme }) => theme.typography.text.xs};

}

/* .custom_input_field {
    width: 30rem;
    border: none;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
  } */

select {
  background: ${theme.colors.grey[0]};
  border-radius: 5px;
  border: none;

  padding: 0.8rem 1.2rem;
  // padding: 1.2em 2.4em;
}

textarea {
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  // border-radius: ${theme.border_radius.md};
  border-radius: $border_radius_15;
  border: 1px solid ${theme.colors.grey.light};
  // background: ${theme.colors.grey[0]};
  background: ${theme.colors.black.light};
  width: 100%;
  height: 8rem;
  box-shadow: ${theme.box_shadows.sm};
  /* text-indent: 2rem; */
}

select:disabled,
input:disabled {
  background: ${theme.colors.grey[200]};
  color: ${theme.colors.grey[500]};
}

input:focus,
textarea:focus,
select:focus {
  // outline: 2px solid ${theme.colors.secondary};
  // outline-offset: -1px;
}

input:focus {
  // width: 150%;
}

.position_relative {
  position: relative;
}

.error_message {
  color: ${theme.colors.unknown_colors.color_warning};
  font-size: 1.23rem;
}

.price, .money{
  font-family: ${({ theme }) => theme.typography.fonts.money};
}


`;
