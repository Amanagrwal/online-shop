import React from 'react';

const reducer = (state, action) => {
    switch (action.type)
    {
      case "LOAD_FILTER_PRODUCTS":
        let pricearr = action.payload.map((curelem)=> curelem.price) 

        //  1st way 
        // let max_price =  Math.max.apply( null , pricearr);
        //   console.log(max_price);


        // 2nd way 

        // let max_price = pricearr.reduce((initialvalue , curval)=> Math.max(initialvalue , curval),0 )
        // console.log(max_price);

        // 3rd way 

        let max_price = Math.max(...pricearr);
          
        return {
          ...state,
          filter_product: [...action.payload], 
          all_product: [...action.payload],   
          filter :{...state.filter , maxprice : max_price , price : max_price }
        };
  
        case "SET_GRID_VIEW" :
          return {
            ...state,
            grid_view : true,
            list_view:false,
          }

        case "SET_LIST_VIEW" :
          return {
            ...state,
            grid_view:false,
          }

        case "GET_SORT_VALUE" :
          // let usersortvalue = document.getElementById("sort");
          // let sort_value = usersortvalue.options[usersortvalue.selectedIndex].value;
          
          return {
           ...state,
          sorting_value : action.payload,
        }

      case "SORTING_PRODUCTS":
      let newsortdata;

      const {filter_product , sorting_value } = state;
      let temsortproduct = [...filter_product];


  //   const sortingproduct = (a,b)=>{
  //     if(sorting_value === "lowest"){
  //       return a.price - b.price;
  //     }
  //      if(sorting_value === "highest"){
  //       return b.price - a.price;
  //   };
  //   if(sorting_value === "a-z"){
  //      return a.name.localeCompare(b.name)
  //   }
  //   if(sorting_value === "z-a"){
  //    return  b.name.localeCompare(a.name)
  //   }
  // }

     const sortingproduct = (a,b)=>{
      switch(sorting_value){
        case "lowest":
        return a.price - b.price;
        case "highest":
        return b.price - a.price;
        case "a-z":
        return a.name.localeCompare(b.name);
        case "z-a":
        return  b.name.localeCompare(a.name)
        default : 
        return 0;
      }
       
     }
      newsortdata = temsortproduct.sort(sortingproduct);
         return{
          ...state,
          filter_product : newsortdata,
          }

     case "UPDATE_FILTER_VALUE":
      const {name , value} = action.payload;
      return {
        ...state,
          filter:{
            ...state.filter,
             [name] : value,
          }
      }

       case "FILTER_UPDATE":
        let {all_product}= state;
        let tempfilterproduct = [...all_product];
     
         const {text , category , company , color, price} = state.filter;
         if (text){
          tempfilterproduct = tempfilterproduct.filter((curElm)=>{
             return curElm.name.toLowerCase().includes(text); 
          });
         }

        if(category !=="all"){
          tempfilterproduct = tempfilterproduct.filter(
            (curElem)=>curElem.category.toLowerCase() === category 
          )
        }

        if(company !== "all"){
          tempfilterproduct = tempfilterproduct.filter(
            (curElem)=>curElem.company === company
            );
        }
       if(color !=="all"){
        tempfilterproduct = tempfilterproduct.filter((curElm)=>
          curElm.colors.includes(color)
        );
       }
       if(price === 0 ){
        tempfilterproduct = tempfilterproduct.filter((curElm)=>
          curElm.price === price
        );
       }
       else{
         tempfilterproduct = tempfilterproduct.filter((curElm)=>
          curElm.price <= price
        );
      }
       return{
         ...state , 
         filter_product : tempfilterproduct,
       };
    case "CLEAR_FILTER":
      return{
        ...state,
        filter:{
          ...state.filter,
          text : "",
          category :"all",
          company :"all",
          color  :"all",
          maxprice : state.filter.maxprice,
          price:state.filter.maxprice,
          minprice:0,
        }
      } 

      default:
        return state;
    }
  };
  
  export default reducer;
  