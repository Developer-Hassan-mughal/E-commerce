import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
  value: 30,
}

export const pageReducer = createSlice({
  name: 'Page',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 30;
      if(state.value > 100){

          toast('You have seen all Products', {
              position: "top-right",
              autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = pageReducer.actions

export default pageReducer.reducer