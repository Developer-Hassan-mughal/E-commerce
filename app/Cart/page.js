"use client"
import React, {useEffect} from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart, decreaseCart, clearCart, getTotals } from '@/store/reducers/productReducer';

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems)
  const Total = useSelector((state) => state.cart)
  // console.log(Total)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [Total , cart , dispatch ])
  
  
const handleAddToCart = (product)=>{
  dispatch(addToCart(product))
}
const handleRemoveFromCart = (cartItem)=>{
    dispatch(removeFromCart(cartItem))
}
const handleDecreaseCart = (item)=>{
    dispatch(decreaseCart(item))
}
const handleClearCart = ()=>{
    dispatch(clearCart())
}

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <>
        <p style={{marginBottom: "50px"}}>Your cart is empty.</p>
        <Link href="/"> ← Start Shopping</Link>
        </>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-details">
                  <p>{item.title}</p>
                  <p>Price: ${item.price}</p>
                  <p>Discount: {item.discountPercentage}%</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseCart(item)}>-</button>
                  
                  <span>{item.cartQuantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
                <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>
                  Remove
                </button>
                <div style={{minWidth: "120px", display: 'flex', justifyContent: 'flex-end'}}>
                    <p style={{color: "black", fontWeight: "500"}}>${item.price*item.cartQuantity}</p>
                </div>
              </div>
            </li>
          ))}
          <li className='cart-total-container'>
            <button onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className='cart-total-right'>
                <div className='cart-total'>
                    <h3>Subtotal</h3>
                    <h3>${Total.cartTotalAmount}</h3>
                </div>
                <p>Taxes and Shipping calculated at checkout</p>
                <button>Check out</button>
                <Link href='/'>Continue Shopping</Link>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Cart;
