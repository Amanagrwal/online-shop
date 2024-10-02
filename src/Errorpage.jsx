import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'

function Errorpage() {
  return (
   <>
   <Wrapper>
    <div className='container'>
      <div>
        <h2>404 </h2>
          <h3>UH OH! You're lost</h3>
       
        <p>the page are lokking for does not exist .how you got here is a mystery
          .but you can click the button to go back the homepage 
        </p>
        <NavLink to="/">

      <Button> Go Back to Home</Button>
        </NavLink>
      </div>
    </div>
   </Wrapper>
   </>
  )
}
const Wrapper = styled.section`
.container{
      padding : 9rem 0;
      text-align:center;

    h2{
    font-size:10rem;
    }
    h3{
    font-size:4.2rem;
    }
    p{
      margin:2rem 0;
    }
}
`
export default Errorpage