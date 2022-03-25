import React from 'react';
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
                <p>Price : {price}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;