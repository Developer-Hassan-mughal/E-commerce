"use client"
import React, { useEffect , useState} from 'react';
import axios from '../../utils/axios';
import style from "../Landing-page/Home.module.css"
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getTotals } from '@/store/reducers/productReducer';


function ProductList() {
    const [featuredProducts, setfeaturedProducts] = useState([])
    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()  

    const handleAddToCart = (product)=>{
        dispatch(addToCart(product))
        dispatch(getTotals())
      }

const products = async ()=>{
    const {data} = await axios.get(`/Products?limit=${page}`)
    setfeaturedProducts(data.products)
    // console.log(data.products)
}
useEffect(() => {
  products()
  // console.log(page)
}, [page])


  return (
    <div className={style.productList}>
      {featuredProducts.map((product) => (
          <div key={product.id} className={style.productCard}>
                <Link className={style.singleProductLink} href={`Product/${product.id}`}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className={style.ratingContainer}>
                            <div className={style.unrated}>
                                <span style={{fontSize: "25px"}}>★★★★★</span>
                                <div className={style.ratedd} style={{width: product.rating*25+"px"}}>
                                <span style={{fontSize: "25px"}}>★★★★★</span>

                                </div>
                            </div>
                            <span style={{fontSize: "14px"}}>{product.rating}</span>
                            </div>
        </Link>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
      ))}
    </div>
  );
}

export default ProductList;
