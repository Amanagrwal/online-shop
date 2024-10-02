import React from 'react'
import styled from 'styled-components';
import { useFiltercontext } from '../Context/Filter_context';
import { TiTick } from "react-icons/ti";
import  Formatprice from "./Helper/FormatPrice"
import {Button}from "../styles/Button"

function FilterSection() {
  const {filter :{text , color , price  , maxprice  , minprice }, updatefiltervalue , all_product  , clearfilters} = useFiltercontext();

  const getuniqedata = (data, property )=>{
      let newvalue = data.map((curElem)=>{
        return curElem[property];
      });

   if(property === "colors"){
    // return newvalue =["all", ...new Set([].concat(...newvalue))];
        newvalue =  newvalue.flat(); 
  }  
     return  newvalue=[ "all", ...new Set(newvalue)];
   

  }

  const  categoryonlydata = getuniqedata(all_product ,"category");
  const  companydata = getuniqedata(all_product ,"company");
  const colorsdata = getuniqedata(all_product,"colors");
  
  return (
    <>
      <Wrapper>
        <div className='filter-search'>
          <form onSubmit={(e)=>e.preventDefault()}>
           <input 
           type='text'
            name='text'
            value={text}
            onChange={updatefiltervalue}
            placeholder='search'>
            </input>
          </form>
        </div>

       <div className='filter-category'>
        <h3>category</h3>
        <div>
          {
          categoryonlydata.map((cuelm , index)=>{
           return <button  key={index}
            type='button'
            name='category'
            value={cuelm}
            onClick={updatefiltervalue}
           >{cuelm}</button>
          }) 
          }
        </div>
       </div>
       <div className='filter-company'>
        <h3>company</h3>
        <form action='#'>
           <select name='company' 
           id='company'
           className='filter-company--select'
           onClick={updatefiltervalue}>
            {
              companydata.map((curelm , index)=>{
              return(
                <option key={index} value={curelm}name="company">{curelm}</option>
            )
              })
            }

           </select>
        </form>
       </div>
       
       <div className='filter-colors colors'>
       <h3>colors</h3>
        <div className='filter-color-style'>
          {
          colorsdata.map((curcolor , index)=>{
            if(curcolor === "all"){
              return(
                <button
                 key={index}
                  type='button'
                  value={curcolor}
                  name="color"
                  className='color-all--style'
                  onClick={updatefiltervalue}>
                      all
                  </button>
                  )
            }
       return(
        <button
         key={index}
          type='button'
          value={curcolor}
          name="color"
          style={{backgroundColor : curcolor}}
          className= {color === curcolor? "btnStyle active" : "btnStyle"}
          onClick={updatefiltervalue}
          >
            {color === curcolor? <TiTick  className='checkStyle'/> : null}
          </button>
          )
          })};
        </div>
       </div>

       <div className='filter-price'>
        <h3>price</h3>
         <p> <Formatprice price={price}/></p>
         <input type='range'name='price' min={minprice} max={maxprice}  value={price} onChange={updatefiltervalue}></input>
       </div>
        <div className='filter-clear'>
       <Button className='btn' onClick={clearfilters}>clear filter</Button>
       </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style{
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection