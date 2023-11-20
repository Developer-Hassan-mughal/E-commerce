import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

function Navbar() {
  const [categories, setcategories] = useState([])

  const getCategories = async ()=>{
    const {data} = await axios.get(`/products/categories`)
    // console.log(data)
    setcategories(data)

  }
  useEffect(() => {
    getCategories()
  }, [])


  

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">E-Commerce</Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className='cat-hover'>
          {/* <Link href="/Products">Products</Link> */}
          <span>Categories</span>
          <div className='options'>
              {categories.map((val, index)=>(
              <span key={index}>
                <Link href={`/Products/${val}`}>{val}</Link>
              </span>
              ))}
          </div>
        </li>
        <li>
          <Link href="/Cart">Cart</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
