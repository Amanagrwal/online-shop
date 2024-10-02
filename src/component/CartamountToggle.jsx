import React from 'react';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function CartamountToggle({ amount, setDecrease, setIncrease }) {
  return (
    <div className='cart-button'>
      <div className='amount-toggle'>
        <button onClick={setDecrease}>
          <FaMinus />
        </button>
        <h1 className='amount-style'>{ amount }</h1>
        <button onClick={setIncrease}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartamountToggle;
