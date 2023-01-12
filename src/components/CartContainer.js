import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from './CartItem'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = ({value}) => {
    const {produit,amount,total} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
  if(produit.length <1 ){
    return <div>
        <h1>empty Bag</h1>
    </div>
  }

  return (
    <div>
        <div> 
            <h1>Product list</h1>
        </div>
        <div>
          
        {produit.map((el)=>{
            return <CartItem key={el.id} {...el}/>
        })}
        </div>
        <footer>
            <hr/>
            <div>
            <h4>total  {total} TND </h4>
            </div>
            <button onClick={()=>dispatch(openModal())}> clear cart</button>
        </footer>
    </div>
  )
}

export default CartContainer