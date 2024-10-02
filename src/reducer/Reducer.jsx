import React from 'react';

const reducer = (state , action)=>{
  switch (action.type) {
    case "SET_LOADING": 
    return{
          ...state ,
          isloading : true,
         };

     case "SET_API_DATA":
        const featureData = action.payload.filter((curElem)=>{
          return curElem.featured === true;
        });
        return{
          ...state,
          isloading:false,
          products:action.payload,
          featureprodut : featureData,
        }
          
    case "API_ERROR": 
    return{
           ...state ,
            isloading : false,
            iserror: true,
        };
        case "SET_SINGLE_LOADING": 
        return{
              ...state ,
              issingleloading: true,
             };
        case "SET_SINGLE_DATA":
          return{
            ...state ,
            issingleloading: false,
            issingleproduct : action.payload,
           };
           case "API_SINGLE_ERROR": 
           return{
                  ...state ,
                  issingleloading : false,
                   iserror: true,
               };
    default:
      return state;   
  }
  
  
}

export default reducer