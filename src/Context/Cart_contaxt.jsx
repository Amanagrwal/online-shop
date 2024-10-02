

import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../reducer/Cart_reducer";
import { useEffect } from "react";



const  Cartcontaxt = createContext();
const getlocalcartdata = () => {
  let newcartdata = localStorage.getItem("amancart");
  // Check for null or undefined, which means no data in localStorage
  if (newcartdata === null) {
    return [];
  } else {
    try {
      return JSON.parse(newcartdata); // Parse the JSON if data exists
    } catch (error) {
      return []; // Return empty array if parsing fails
    }
  }
};


 const intialstate = {
   cart: getlocalcartdata(),
   total_item : "",
   total_price:"",
   shipping_fee : 50000,
 };

export const Cartprovider = ({children})=>{

    const [state , dispatch] = useReducer(reducer , intialstate);
    const  addToCart = (id , color,amount , product)=>{
      dispatch({type:"ADD_TO_CART" , payload : {id , color , amount , product}})
}
   const removeitem = (id) =>{
      dispatch({type:"REMOVE_ITEM", payload:id });
   }
   const removeall = ()=>{
     dispatch({type:"REMOVE_ALL"});
   }

   const setDecrease = (id)=>{
     dispatch({type : "SET_DECRESE" , payload : id})
   }
   const setIncrease = (id)=>{
     dispatch({type : "SET_INCRESE" , payload : id})
   }


   useEffect(()=>{
    // dispatch({type:"CART_TOTAL_ITEM"});
    // dispatch({type:"CART_TOTAL_PRICE"});
    dispatch({type:"UPDATE_ITEMS_AND_PRICE"})
       localStorage.setItem("amancart",JSON.stringify(state.cart) )
   },[state.cart])



 return  <Cartcontaxt.Provider value={{...state , addToCart , removeitem , removeall ,setDecrease, setIncrease }}>
     {children}
 </Cartcontaxt.Provider>
};
  
export  const useGlobalcontaxt = ()=>{
    return  useContext(Cartcontaxt);
} 