import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenu, CgClose } from "react-icons/cg";
import { useGlobalcontaxt } from '../Context/Cart_contaxt';


function Navbar() {
  const {total_item } = useGlobalcontaxt();
  const [menuIcon, setMenuIcon] = useState(false);
 
  
  return (
    <Nav menuIcon={menuIcon}>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className='navbar-lists'>
          <li>
            <NavLink to="/" className="navbar-link home-link"
             onClick={() => setMenuIcon(false)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link"
             onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link"
             onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link"            
             onClick={() => setMenuIcon(false)}
             >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <AiOutlineShoppingCart className='cart-trolley' />
              <span className='cart-total--item'>{total_item }</span>
            </NavLink>
          </li>
        </ul>
        <div className='mobile-navbar-btn'>
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
            style={{ display: menuIcon ? 'none' : 'block' }}
            />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(false)}
            style={{ display: menuIcon ? 'block' : 'none' }}
            />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    transition: all 0.3s linear;
   
    
  }

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
    z-index: 9999;

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .cart-trolley--link {
    position: relative;
    right:13px;

    .cart-trolley {
      font-size: 3.6rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.helper};
      color: #fff;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
    }

    .navbar-lists {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.3s linear;
      transform: ${({ menuIcon }) => (menuIcon ? 'translateX(0)' : 'translateX(100%)')};
      opacity: ${({ menuIcon }) => (menuIcon ? '1' : '0')};
      visibility: ${({ menuIcon }) => (menuIcon ? 'visible' : 'hidden')};
      z-index: 999;
    }

    .navbar-link {
      font-size: 4.2rem;
    }
  }
`;
export default Navbar;
