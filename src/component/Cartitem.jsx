import React from 'react'
import Formatprice from "./Helper/FormatPrice"
import CartamountToggle from './CartamountToggle'
import { FaTrash } from "react-icons/fa";
import { useGlobalcontaxt } from '../Context/Cart_contaxt';

function Cartitem({id , name , image , color , price , amount  }) {
    
    const {removeitem , setDecrease, setIncrease} = useGlobalcontaxt();
  return (
    <>
   <div className='cart_heading grid grid-five-column'>
    <div className='cart-image--name'>

        <div>
            <figure>
                <img src={image}/>
            </figure>
        </div>
       <div>
        <p>{name}</p>
        <div className='color-div'>
            <p> color: </p>
            <div className='color-style' style={{backgroundColor : color , color : color} }>
           
            </div>
        </div>
       </div>
    </div>
    {/* price */}
    <div className='cart-hide'>
       <p>
        <Formatprice price={price}/>
        </p>
    </div>

    {/* Quantity */}
    <CartamountToggle
          amount={amount}
          setDecrease={ ()=>setDecrease(id)}
          setIncrease={()=>setIncrease(id)}
        />

     {/* subtotal */}
     <div className='cart-hide'>
        <p><Formatprice  price={price * amount}/></p>
     </div>

     {/* remove  */}
     <div>
       <FaTrash className='remove_icon'onClick={()=>removeitem(id)} />
       </div>
    </div>

     

    </>
  )
}

export default Cartitem