import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

function Header() {
  return (
   <MainHeader>
      <NavLink to="/">
      <img src='./images/shop_image.png' alt='my logo ' className='logo'/>
      </NavLink>
     <Navbar/>
   </MainHeader>
  )
}

const  MainHeader = styled.header`
 height:10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content:space-between ;
 align-items:center;
 position:relative;

 

 .logo{
  height:10rem;
  width:16rem;
  margin-left:50px
 }
`;
export default Header