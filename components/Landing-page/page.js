"use client"
import React from 'react';
import ProductList from '../Product-list/page';
import style from "./Home.module.css"
import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { increment} from '@/store/reducers/pageReducer';


function LandingPage() {
  // const page = useSelector((state) => state.page.value)
  const dispatch = useDispatch()


  return (
    <div className={style.body}>
      <header className={style.header}>
        <h1>My E-Commerce Store</h1>
        <p>Discover amazing products at great prices.</p>
      </header>
      <section className={style.featuredProducts}>
        <h2>Featured Products</h2>
        <ProductList />
        <div className={style.PageButtons}>

        <button onClick={()=>dispatch(increment())}>Load More</button>
        </div>
      </section>
      <section className={style.about}>
        <h2>About Us</h2>
        <p>
        Welcome to My E-Commerce Store, your go-to destination for discovering high-quality products at unbeatable prices.
    At our store, we are passionate about curating a diverse selection of items that cater to your every need and desire.
    With a commitment to excellence, we handpick each product to ensure it meets our standards of quality, innovation, and style.
    Our team is dedicated to providing you with a seamless and enjoyable shopping experience, from browsing our featured products to the final checkout.
    We believe in the power of exceptional customer service, and we are here to assist you every step of the way.
    Whether you're searching for the latest fashion trends, cutting-edge gadgets, or unique home decor, My E-Commerce Store is your trusted partner in discovering and acquiring the finest products on the market.
    Thank you for choosing us. Happy shopping!
        </p>
      </section>
      <section className={style.contact}>
      <h2>Contact Us</h2>
    <div className={style.contactInfo}>
      <div className={style.contactItem}>
        <FaEnvelope />
        <Link href="#">hm91277@gmail.com</Link>
      </div>
      <div className={style.contactItem}>
        <FaPhoneAlt />
        <a href="#">+91 7987842694</a>
      </div>
    </div>
    <p>
      Our dedicated team is available to assist you with any inquiries you may have regarding our products, orders, or general information. We value your
      feedback and are continuously working to improve our services to better meet your needs. Connect with us on social media to stay updated on the latest
      promotions, product launches, and more. Follow us on{' '}
      <Link href="#" target="_blank" rel="noopener noreferrer" className={style.Link}>
        <FaFacebook /> Facebook
      </Link>
      ,
      <Link href='#' className={style.Link}>
        <FaTwitter /> Twitter
      </Link>
      , and
      <Link href="#" target="_blank" rel="noopener noreferrer"className={style.Link}>
        <FaInstagram /> Instagram
      </Link>
      to be a part of our growing community. We look forward to hearing from you and appreciate your trust in My E-Commerce Store for all your shopping needs.
    </p>
      </section>
      <footer className={style.footer}>
        <p>&copy; 2023 My E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
