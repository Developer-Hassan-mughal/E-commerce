import React,{useEffect} from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Cart = () => {
  const {cartTotalQuantity} = useSelector(state => state.cart)
    
  return (
    <div>
        <Link href="/Cart">
        <div className='cart-icon'>
          {cartTotalQuantity.length === 0 ? "":
          <span>{cartTotalQuantity}</span>
        }
          <img src="https://www.freeiconspng.com/uploads/cart-icon-16.png" alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Cart