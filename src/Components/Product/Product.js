import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props.product)
    const { name, picture, price } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className="product-detail">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>
                <p>Add to Cart <FontAwesomeIcon icon={faShoppingBasket} /> </p>
            </button>
        </div>
    );
};

export default Product;