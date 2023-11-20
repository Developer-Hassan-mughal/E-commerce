"use client"
import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import axios from '../../../utils/axios';
import { useDispatch } from 'react-redux';
import SuggestedProductCard from '../../../components/suggestion/SuggestedProductCard';
import { addToCart, getTotals } from '@/store/reducers/productReducer';
import styles from "../../../components/suggestion/SuggestedProductCard.module.css"


function SingleProductPage({params}) {
    const [singleProduct, setsingleProduct] = useState([])
    const [images, setimages] = useState([])
    const [suggestedProducts, setSuggestedProducts] = useState([]);

const Product = async ()=>{
    const { data } = await axios.get(`/products/${params.id}`)
    setsingleProduct(data)
    setimages(data.images)
    // console.log(data)
    const suggestedResponse = await axios.get(`/products/category/${data.category}`);
    setSuggestedProducts(suggestedResponse.data.products);
    // console.log(suggestedResponse.data)
}

const dispatch = useDispatch()
  
const handleAddToCart = (product)=>{
  dispatch(addToCart(product))
  dispatch(getTotals())
}

  useEffect(() => {
    new Swiper('.swiper-container', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    Product()
  }, []);

  return (
    <div className='main' >
    <div className="single-product">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div className="swiper-slide" key={index}>
              <img src={image} alt={`Product Image ${index}`} />
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination" style={{top : "5%"}}></div>
      </div>
      <div className="product-details">
        <h3>Brand: {singleProduct.brand}</h3>
        <h1>{singleProduct.title}</h1>
        {/* <div className='Total-rating' style={{width: 5*40+"px" , zIndex: "55",}}><div className='rated' style={{width: singleProduct.rating*40+"px" ,}}> <span>{singleProduct.rating}</span> </div></div> */}
        <div className="rating-container">
                          <div className="unrated">
                            <span style={{fontSize: "25px"}}>★★★★★</span>
                            <div className="ratedd" style={{width: singleProduct.rating*25+"px"}}>
                            <span style={{fontSize: "25px"}}>★★★★★</span>

                            </div>
                          </div>
                          <span style={{fontSize: "14px"}}>{singleProduct.rating}</span>
                        </div>
        <p>Price: ${singleProduct.price}</p>
        <p style={{color: "green"}}>Discount: {singleProduct.discountPercentage}%</p>
        <p>{singleProduct.description}</p>
        <p>Only {singleProduct.stock} Units left</p>
        <button onClick={() => handleAddToCart(singleProduct)}>Add to Cart</button>
      </div>


    </div>

    <div className={styles.suggestedProducts}>
        <h2>Simmilar Products</h2>
        <div className={styles.suggestedProductsContainer}>
          {suggestedProducts.map((product) => (
            <SuggestedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default SingleProductPage;
