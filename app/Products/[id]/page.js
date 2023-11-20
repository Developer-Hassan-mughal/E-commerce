
"use client"
import axios from '../../../utils/axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '@/store/reducers/productReducer';


function ProductList({params}) {
  // console.log(params)

const [Products, setProducts] = useState([])
  const dispatch = useDispatch()  
  
  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(getTotals())
  }

  const getProducts = async ()=>{
    const {data} = await axios.get(`/Products/category/${params.id}`)
    setProducts([data.products])
    // console.log(data.products)
}

useEffect(() => {
  getProducts()
}, [])

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {
            Products.map((products)=>(
                products===0 ? "Loading..." : products.map((product, index) => (
                  <li key={product.id}>
                    <div className="product">
                  <Link href={`/Product/${product.id}`}>
                      <img src={product.thumbnail} alt={product.title} />
                  </Link>
                      <div className="product-info">
                        <p>{product.title}</p>
                        <div className="rating-container">
                          <div className="unrated">
                            <span style={{fontSize: "25px"}}>★★★★★</span>
                            <div className="ratedd" style={{width: product.rating*25+"px"}}>
                            <span style={{fontSize: "25px"}}>★★★★★</span>

                            </div>
                          </div>
                          <span style={{fontSize: "14px"}}>{product.rating}</span>
                        </div>
                        <p>price: ${product.price}</p>
                        <p>Discount: {product.discountPercentage}%</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                      </div>
                    </div>
              </li>
        ))
        ))

        }
      </ul>

    </div>
  );
}

export default ProductList;
