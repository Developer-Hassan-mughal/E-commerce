"use client"
import './globals.css'
import { store } from "@/store/store"
import { Provider } from "react-redux"
import Navbar from '@/components/Navbar/Nav'
import Cart from '@/components/Cart-Icon/Cart'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTotals } from '@/store/reducers/productReducer'

store.dispatch(getTotals())
export default function RootLayout({ children }) {

  return (
    <html lang="en">

        <Provider store={store}>
              <body suppressHydrationWarning>
                <Navbar/>
                <Cart/>
                {children}
                <ToastContainer />
                </body>
        </Provider>

    </html>
  )
}
