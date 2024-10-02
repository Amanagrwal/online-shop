import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductcontext } from "./Productcontext";
import reducer from "../reducer/Filterreducer";
const FilterContext = createContext();

const initialState = {
  filter_product: [],
  all_product: [],
  grid_view : true,
  sorting_value : "lowest",
  filter : {
  text : "",
  category :"all",
  company :"all",
  color  :"all",
  maxprice : 0,
  price:0,
  minprice:0,
  },
};
  export const Filtercontextprovider=({ children })=>{
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = UseProductcontext(); 

  // to set the grid view

  const SetGridview = ()=>{
    return dispatch( {type : "SET_GRID_VIEW" })
  }
  
  const setListview = ()=>{
    return dispatch({type:"SET_LIST_VIEW"})
  }

  const sorting = (event)=>{
    let uservalue = event.target.value ; 
    return dispatch({type:"GET_SORT_VALUE" , payload : uservalue});
  }

  const updatefiltervalue = (event)=>{
    let name  = event.target.name;
    let value = event.target.value;
    return dispatch( {type: "UPDATE_FILTER_VALUE" , payload : {name, value}})
  }
  
  const clearfilters = ()=>{
        return  dispatch({type:"CLEAR_FILTER"})
  }

  useEffect(()=>{
    dispatch({type:"FILTER_UPDATE"})
    dispatch({type:"SORTING_PRODUCTS"})
  },[products , state.sorting_value , state.filter]);


  useEffect(() => {
  dispatch({ type: "LOAD_FILTER_PRODUCTS", payload : products });
} ,[ products] );

  return (
    <FilterContext.Provider value={{ ...state , SetGridview , setListview , sorting , updatefiltervalue , clearfilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFiltercontext = () => {
  return useContext(FilterContext);
};
