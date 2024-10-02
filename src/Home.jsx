import React from 'react'
import Herosection from './Herosection'
import styled from 'styled-components'
import Trusted from './component/Trusted'
import Services from './component/Services'
import Feautureproduct from './component/Feautureproduct'

function Home() {
  const data = {
    name :"QuickCart",
  }
  return (
   <>
   <Wrapper >
     <Herosection  mydata={data} />
     <Feautureproduct/>
     <Services/>
     <Trusted/>
     </Wrapper>
   </>
  )
}

const Wrapper = styled.section`
  background-color :#fff;
`
export default Home