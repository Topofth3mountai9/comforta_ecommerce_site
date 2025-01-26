import React, { useState } from 'react';
import Navbar from '../ui/nav_bar';
import { cart_button_links, nav_links } from '../data';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../ui/button.component';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';
import { useSideBarContext } from '../context/SideBarContext';
import Cart_drop_down from './cart_drop_down.component';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import Logo from '../ui/logo.component';
import { useGetCurrentUser } from '../features/authentication/useGetCurrentUser';
import { useLogout } from '../features/authentication/useLogout';
import ButtonWithIcon from '../ui/button_with_icon';
import { Search } from 'lucide-react';
import Search_filter from './search_filter.component';
import { useCartContext } from '../context/CartContext';
const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  z-index: 500; //to ensure the navbar is always above anything else

  svg {
    /* width: 2.4rem; */
    /* height: 2.4rem; */
  }

  .search_btn {
  }
  ${respond_to('768')} {
    .search_btn {
      margin-left: auto;
      position: absolute;
      right: 6rem;
    }
  }
`;

const StyledList = styled.li`
  &:hover {
    .nav_link {
      /* color: ${({ theme }) => theme.colors.primary}; */
    }
  }
`;

const StyledLink = styled(NavLink)`
  line-height: 1 !important;
  .btn {
    font-size: ${({ theme }) => theme.typography.text.xs} !important;
    text-transform: uppercase;
  }
  border-radius: ${({ theme }) => theme.border_radius.sm};
  &:hover {
    background-color: ${({ hover, theme }) =>
      hover === 'primary' ? theme.colors.primary : theme.colors.secondary};
    color: ${({ theme }) => theme.colors.grey[0]};
  }

  ${respond_to('768')} {
    .btn {
      font-size: ${({ theme }) => theme.typography.text.large};
    }
  }
`;

const StyledLinkWithIcon = styled(Link)`
  .btn {
    font-size: ${({ theme }) => theme.typography.text.xs};
    /* padding: 0; */
  }

  svg {
    color: ${({ theme }) => theme.colors.black.black_500};
  }
  &:hover {
    .btn-ghost {
      /* background-color: ${({ theme }) => theme.colors.primary}; */
    }
    svg {
      color: ${({ theme }) => theme.colors.grey[0]};
    }
  }
`;

const GhostButton = styled.button`
  border-radius: ${({ theme }) => theme.border_radius.sm};
  position: relative;

  .cart_products_count {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    position: absolute;
    top: -6.2px;
    right: 0.3rem;
    background: ${({ theme }) => theme.colors.brand_secondary_dark[300]};
    color: ${({ theme }) => theme.colors.brand_secondary_light[300]};
  }
  &:hover {
    background-color: ${({ hover, theme }) =>
      hover === 'primary' ? theme.colors.primary : theme.colors.secondary};
    color: ${({ theme }) => theme.colors.grey[0]};
  }

  ${respond_to('768')} {
    .btn {
      font-size: ${({ theme }) => theme.typography.text.large};
    }
  }
`;

const CartButtonsContainer = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.black.black_500};
  }
`;

function NavBar() {
  const { user, isLoading } = useGetCurrentUser();
  const logout_mutation = useLogout();
  const navigate = useNavigate();
  const { total_num_cart_items } = useCartContext();
  // logout_mutation.mutate()
  const { is_sidebar_open, close_sidebar, open_sidebar, toggle_sidebar } =
    useSideBarContext();
  const [is_drop_down_open, set_is_drop_down_open] = useState(false);

  function close_cart_drop_down() {
    set_is_drop_down_open(false);
  }

  function open_cart_drop_down() {
    set_is_drop_down_open(true);
  }

  const navbar_link_elements = nav_links.map((link) => {
    const { id, label, url } = link;

    return (
      <StyledList key={id} onClick={close_sidebar}>
        <StyledLink
          hover="primary"
          className="btn btn-ghost nav_link flex_items align_middle align_horizontal text_xs"
          to={url}
        >
          {/* <GhostButton  > */}
          {label}
          {/* </GhostButton> */}
        </StyledLink>
      </StyledList>
    );
  });

  const navbar_button_elements = cart_button_links.map((link) => {
    const { id, label, icon, url } = link;
    return (
      // <CartButtonsContainer >
      <StyledLinkWithIcon key={id} to={url}>
        <GhostButton
          hover="primary"
          className="btn btn-ghost btn_small flex_items align_middle align_horizontal"
        >
          <span>{label}</span> {icon}
        </GhostButton>
      </StyledLinkWithIcon>
      // </CartButtonsContainer>
    );
  });
  return (
    <NavBarContainer>
      <Navbar>
        {/* <Navbar.Logo>My Shop</Navbar.Logo> */}
        <Navbar.Logo>
          <Logo />
        </Navbar.Logo>
        <Navbar.Links>
          {navbar_link_elements}
          {/* <StyledList>
            <StyledLink
              hover="primary"
              className="btn btn-ghost nav_link flex_items align_middle align_horizontal text_xs"
              to="/checkout"
            >
              checkout
            </StyledLink>
          </StyledList> */}
        </Navbar.Links>

        {/* <Navbar.Links>{navbar_button_elements}</Navbar.Links> */}
        <Navbar.Links>
          <StyledLinkWithIcon to={`/cart`} onMouseEnter={open_cart_drop_down}>
            <GhostButton
              hover="primary"
              className="btn btn-ghost btn_small flex_items align_middle align_horizontal"
            >
              <span>cart</span> <HiOutlineShoppingCart />
              <span className="cart_products_count flex_items align_middle align_horizontal">
                {total_num_cart_items}
              </span>
            </GhostButton>
          </StyledLinkWithIcon>
          {user ? (
            <ButtonWithIcon
              className="flex_items align_middle align_horizontal rounded-md"
              onClick={() => {
                // close_sidebar
                logout_mutation.mutate();
              }}
            >
              <HiArrowRightOnRectangle />
            </ButtonWithIcon>
          ) : (
            <StyledLinkWithIcon to={`/login`}>
              <GhostButton
                hover="primary"
                className="btn btn-ghost btn_small flex_items align_middle align_horizontal"
              >
                <span>login</span> <HiOutlineUser />
              </GhostButton>
            </StyledLinkWithIcon>
          )}
        </Navbar.Links>
        <ButtonWithIcon
          className="btn search_btn ml-4"
          onClick={() => {
            navigate('/products');
            document.getElementById('my_modal_2').showModal();
          }}
        >
          <Search />
        </ButtonWithIcon>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <Search_filter />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <Navbar.HamburgerButton />
        <Navbar.MobileMenu>
          {navbar_link_elements}
          <StyledList onClick={close_sidebar}>
            <StyledLinkWithIcon
              to={`/cart`}
              // onMouseEnter={open_cart_drop_down}
            >
              <GhostButton
                hover="primary"
                className="btn btn-ghost btn_small flex_items align_middle align_horizontal"
              >
                <span>cart</span> <HiOutlineShoppingCart />
                <span className="cart_products_count flex_items align_middle align_horizontal">
                  {total_num_cart_items}
                </span>
              </GhostButton>
            </StyledLinkWithIcon>
          </StyledList>
          <StyledList onClick={close_sidebar}>
            {user ? (
              <ButtonWithIcon
                className="flex_items align_middle align_horizontal rounded-md"
                onClick={() => logout_mutation.mutate()}
              >
                <HiArrowRightOnRectangle />
              </ButtonWithIcon>
            ) : (
              <StyledLinkWithIcon to={`/login`}>
                <GhostButton
                  hover="primary"
                  className="btn btn-ghost btn_small flex_items align_middle align_horizontal"
                >
                  <span>login</span> <HiOutlineUser />
                </GhostButton>
              </StyledLinkWithIcon>
            )}
          </StyledList>
        </Navbar.MobileMenu>
      </Navbar>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {is_drop_down_open && (
        <Cart_drop_down close_cart_drop_down={close_cart_drop_down} />
      )}
    </NavBarContainer>
  );
}

export default NavBar;
