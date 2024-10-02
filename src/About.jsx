import React from 'react';
import Herosection from './Herosection';
import styled from 'styled-components';

// import { UseProductcontext } from './Context/Productcontext';
function About() {
  
  // const {state} = UseProductcontext();

  const data = {
    name: "Agrwal Ecommerce",
  };

  return (
    <Wrapper>
     {/* {state.isloading} */}
      <Herosection mydata={data} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #fff;
`;

export default About;
