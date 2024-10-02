import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header";
import Footer from "./component/Footer";
import {GlobalStyle } from "./Globalstyle";

const App = () => {
  const theme = {
    colors:{
      bg:"#F6F8FA",
      footer_bg : "#0a1435",
      heading: "rgb(24 24 29)",
      btn:"rgb(98 84 243)",
      text: "rgba(29 ,29, 29, .8)",
      border:"rgba(98,84,243,0.5)",
      helper: "#8490ff",
      white: "#fff",
      black: " #212529",
      hr:"#ffffff",
      gradient:
      "rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
     mobile:"768px",
     tab:"998px",
    },
    };
  return <>
  <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <BrowserRouter>
    <Header/>
   <Routes>
    <Route path="/" element = {<Home/>}></Route>
    <Route path="/About" element = {<About/>}></Route>
    <Route path="/Products" element = {<Products/>}></Route>
    <Route path="/Contact" element = {<Contact/>}></Route>
    <Route path="/singleproduct/:id" element = {<SingleProduct/>}></Route>
    <Route path="/Cart" element = {<Cart/>}></Route>
    <Route path="/*" element = {<Errorpage/>}></Route>
     </Routes>
     <Footer/>
  </BrowserRouter>
  </ThemeProvider>
    
  </>
};



export default App;
