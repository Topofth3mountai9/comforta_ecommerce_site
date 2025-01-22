import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../ui/breadcrumb.component';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Hero_with_bg_overlay from '../ui/Hero_with_bg_overlay.component';
import Trending_products from '../components/trending_products.component';

import Second_hero from '../components/second_hero.component';
import OurServices from '../components/our_services.component';
import Choose_us from '../components/choose_us.component';
import Faqs from '../components/faqs.component';
import Testimonials from '../components/Testimonials.component';
import Gallery from '../components/gallery.component';
import Trial from '../components/trial.component';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div``;

function Home() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      {/* <Breadcrumb current_page="home" svg={<HiOutlineChevronRight />} /> */}
      <Hero_with_bg_overlay
        backgroundImage="/images/hero2.webp"
        title="Design Your comfort zone"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit"
        background_color="#c1bbb8"
        primary_button_text="Shop Now"
        secondary_button_text="explore"
        on_primary_click={() => navigate('/products')}
      />

      <Trending_products />
      <Second_hero />
      <OurServices />
      <Choose_us />
      <Faqs />
      <Testimonials />
      <Gallery />
      {/* <Trial /> */}
    </HomeContainer>
  );
}

export default Home;
