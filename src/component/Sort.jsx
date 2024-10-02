import React from 'react'
import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { useFiltercontext } from '../Context/Filter_context';
import styled from 'styled-components';

function Sort() {
  const{ grid_view  , SetGridview , setListview , filter_product , sorting} = useFiltercontext();
    
  return (
    <>
    <Wrapper className='sort-section'>
      <div className='sorting-list--grid'>
         <button className= {grid_view ?' active sort-btn' : "sort-btn"} onClick={SetGridview}>
         < IoGridOutline className='icon'/>
         </button>

         <button className={grid_view ?' sort-btn' : "  active sort-btn"} 
           onClick={setListview}>
            <FaList className='icon'/> 
          </button>
         </div>

       <div className='product-data'>
        <p> {`${filter_product.length} product Available`}</p>        
       </div>

      <div className='sort-selection'>
       <form action='#'>
        <label htmlFor='sort'></label>
        <select 
         name='sort'
         id='sort'
          className='sort-selection--style' onClick={sorting}>
          <option value="lowest">price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest">price(highest)</option>
          <option value="#" disabled></option>
          <option value="a-z">price(a-z)</option>
          <option value="#" disabled></option>
          <option value="z-a">price(z-a)</option>
        </select>
       </form>
        
      </div>
      
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort