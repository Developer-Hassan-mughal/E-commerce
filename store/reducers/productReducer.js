import { createSlice } from '@reduxjs/toolkit'
var ci = ""
  if(typeof window !== 'undefined'){
     ci = localStorage.getItem("cartItems") 
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  }
  const initialState = {
    // cartItems: localStorage.getItem("cartItems")
    // ? JSON.parse(localStorage.getItem("cartItems"))
    // : [],
    cartItems : ci,
    cartTotalQuantity: 0,
    cartTotalAmount: 0
  }

export const productReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }else{
        const tempProduct = { ...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action){
      const nextCartItems = state.cartItems.filter(
        (cartItems) => cartItems.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action){
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if(state.cartItems[itemIndex].cartQuantity > 1){
        state.cartItems[itemIndex].cartQuantity -= 1;
      }else{
        const nextCartItems = state.cartItems.filter(
          (cartItems) => cartItems.id !== action.payload.id
        );
  
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    clearCart(state,action){
      state.cartItems = []
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    getTotals(state,action){
      let {total, quantity}= state.cartItems.reduce(
        (cartTotal, cartItem) =>{
          const {price, cartQuantity}= cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },{
          total : 0,
          quantity: 0
        }
      )
      state.cartTotalAmount = total,
      state.cartTotalQuantity = quantity
    }
  },
})

export const { addToCart , removeFromCart , decreaseCart, clearCart, getTotals} = productReducer.actions

export default productReducer.reducer