import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';
 
function Herosection({mydata}) {
  return (
   <>
     <Wrapper>
    <div className='container'> 
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>welcome to</p>
                  <h1>{mydata.name}</h1>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium eligendi a, 
                    ab quos exercitationem cum voluptate. Rem atque quibusdam aliquam?
                </p>
                <NavLink>
                 <Button>show now</Button>
                </NavLink>
          </div>
   {/*home page  */}

   <div className='hero-section-image'>
    <figure>
        <img src='images/hero.jpg' alt='hero-section-background' className='img-style'/>
    </figure>
   </div>
        </div>
    </div>
     </Wrapper>
   </>
  )
}
const Wrapper = styled.section`
 padding:12rem 0;


 img{
  min-width:10rem;
  height:10rem;
 }
  .hero-section-data{
  p{
     margin:2rem 0;
  }
     h1{
      text-transform:capitlize;
      font-weight:bold;
     }
  .intro-data{
   margin-bottom:0;
  }
  }

  .hero-section-image{
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
  }
    figure{
    position:relative;
  &::after{
   content:"";
   width:60%;
   height:80%;
   background-color : rgba(100 ,56,238,0.5);
   position:absolute;
   left:50%;
   top:-5rem;
   z-index :-1;
  }
}
  .img-style{
    width:100%;
    height:100%;
  }
    @media(max-width:${({theme})=>theme.media.mobile}){
     .grid{
     gap:10rem;
     }
figure::after{
  content:"";
  width:50%;
  height:100%;
  left:0;
  top:10%;
  backgrount-color:rgba(81,56,238,0.4);
// }

    }








    
`;
export default Herosection