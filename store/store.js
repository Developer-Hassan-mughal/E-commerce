import { configureStore } from '@reduxjs/toolkit'
import Reducer from './reducers/productReducer'
import pageReducer from './reducers/pageReducer'


export const store = configureStore({
  reducer: {
    cart : Reducer,
    page : pageReducer
  },
})