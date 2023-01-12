import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const {amount} = useSelector(state=>state.cart)
   console.log(amount);
  
    return (
    <nav>
        <div className='nav-center'>
            <h3> Redux toolkit</h3>
            <div className='nav-container'>
            <h2> panier</h2>
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>

            </div>
            </div>

        </div>
    </nav>
  )
}

export default NavBar