import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger.component';
import OurContainer from '../components/OurContainer.component';
import { useSideBarContext } from '../context/SideBarContext';

// const NavbarContext = createContext();

const NavBarContainerHelper = styled.div`
  border-bottom: 0.1rem solid #444;
  /* background: ${({ theme }) => theme.colors.unknown_colors.body_bg}; */
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Nav_bar_container = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;
`;
const Nav_bar_content = styled.nav`
  width: 95%;
  height: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* background: ${({ theme }) => theme.colors.unknown_colors.body_bg}; */
  position: relative;
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 300;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    /* justify-content: center; */
    padding-block-start: 25rem;
    position: fixed;
    top: 0;
    left: 0;
    /* right: 0; */
    /* height: calc(100vh - 10rem); */
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.unknown_colors.body_bg};
    /* color: ${({ theme }) => theme.colors.grey[100]}; */
    transition: transform 0.3s ease-in-out;
    transform: ${({ is_sidebar_open }) =>
      is_sidebar_open ? 'translateY(0)' : 'translateY(-100%)'};
    z-index: 10;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 300;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ children, className = '' }) => {
  const { is_sidebar_open, close_sidebar, open_sidebar, toggle_sidebar } =
    useSideBarContext();

  // const toggleMenu = () => set_is_nav_open((prev) => !prev);

  return (
    // <NavbarContext.Provider
    //   value={{ is_sidebar_open, close_sidebar, open_sidebar, toggle_sidebar }}
    // >
    <NavBarContainerHelper id="top_nav" data-theme="furniture">
      <OurContainer other_class="container">
        <Nav_bar_container className="nav_bar_container">
          <Nav_bar_content className="nav_bar">{children}</Nav_bar_content>
        </Nav_bar_container>
      </OurContainer>
    </NavBarContainerHelper>
    // </NavbarContext.Provider>
  );
};

// const useNavbar = () => {
//   // const context = useContext(NavbarContext);
//   if (!context) {
//     throw new Error(
//       'Navbar sub components must be used within a Navbar component'
//     );
//   }
//   return context;
// };

Navbar.Logo = ({ children }) => {
  return (
    <LogoContainer className="flex_items align_middle">
      {children}
    </LogoContainer>
  );
};

Navbar.Links = ({ children }) => {
  return <LinksContainer className="item_end">{children}</LinksContainer>;
};

Navbar.MobileMenu = ({ children }) => {
  // const { is_sidebar_open } = useNavbar();
  const { is_sidebar_open } = useSideBarContext();
  return (
    <MobileMenuContainer
      is_sidebar_open={is_sidebar_open}
      style={{ height: '100vh' }}
      className="s"
    >
      {children}
    </MobileMenuContainer>
  );
};

Navbar.HamburgerButton = () => {
  // const { toggle_sidebar, is_sidebar_open } = useNavbar();
  const { toggle_sidebar, is_sidebar_open } = useSideBarContext();
  return (
    <HamburgerButton onClick={toggle_sidebar} className="item_end">
      <Hamburger is_sidebar_open={is_sidebar_open} />
    </HamburgerButton>
  );
};

export default Navbar;
