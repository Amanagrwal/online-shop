import axios from "axios";
import React from "react";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Reducer";

const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const intialstate = {
  isloading : false,
  iserror :false,
  products:[],
  featureprodut:[] ,
  issingleloading:false,
  issingleproduct: {},
}
const Appprovider=({ children }) => {  
   const [state , dispath] = useReducer(reducer , intialstate); 

  const  Getproduct =  async (URL)=>{
       dispath({type:"SET_LOADING"});
    try {
      const res = await axios.get(URL);
      const product = await res.data;
        
      dispath({type:"SET_API_DATA" , payload:product});
    } catch (error){
         dispath({type:"API_ERROR"});
    }
  };

  // my 2nd api 
  useEffect(()=>{
         Getproduct(API);
    },[])
  
  const Getsingleproduct =  async(URL)=>{
    dispath({type:"SET_SINGLE_LOADING"});
    try {
      const res = await axios.get(URL);
      const singleproduct = await res.data;
      dispath({type:"SET_SINGLE_DATA" , payload:singleproduct});
  }catch(error){
    dispath({type:"API_SINGLE_ERROR"});

  }


  }
  
  return (
    <Appcontext.Provider value={{...state , Getsingleproduct }}>
          {children}
    </Appcontext.Provider>
  );
};
// custom Hooks....  
  const UseProductcontext = ()=>{
    return useContext(Appcontext);
  }

export { Appprovider, UseProductcontext  , Appcontext};
