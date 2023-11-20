import React from 'react';
import styles from './SuggestedProductCard.module.css'; // Import your CSS module for styling
import Link from 'next/link';

const SuggestedProductCard = ({ product }) => {
  return (
    <div className={styles.suggestedProductCard}>
        <Link className={styles.Link} href={`/Product/${product.id}`}>
      <img src={product.thumbnail} alt={`Product Image ${product.id}`} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <div className="rating-container">
            <div className="unrated">
                <span style={{fontSize: "25px"}}>★★★★★</span>
                    <div className="ratedd" style={{width: product.rating*25+"px"}}>
                        <span style={{fontSize: "25px"}}>★★★★★</span>

                    </div>
            </div>
            <span style={{fontSize: "14px"}}>{product.rating}</span>
        </div>
        </Link>
      <button>Add to Cart</button>
    </div>
  );
};

export default SuggestedProductCard;
