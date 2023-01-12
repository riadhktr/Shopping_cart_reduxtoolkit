import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
const Modal = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Remove items from shopping bag ?</h3>
    <button onClick={()=>{dispatch(clearCart())
    dispatch(closeModal())}}>Confirm</button>
    <button onClick={()=>dispatch(closeModal())}>Cancel</button>
    </div>
  )
}

export default Modal