import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Appprovider } from "./Context/Productcontext.jsx"; 
import { Filtercontextprovider } from "./Context/Filter_context.jsx";
import { Cartprovider } from "./Context/Cart_contaxt.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
    <Appprovider>
      <Filtercontextprovider>
       <Cartprovider>
          <App/>
        </Cartprovider>
      </Filtercontextprovider>
    </Appprovider>
  </React.StrictMode>
  </StrictMode>,
)
