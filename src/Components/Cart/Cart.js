import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { singleProduct } = props;
    return (

        <div className='cart-product'>
            <p>{singleProduct}</p>
        </div>

    );
};

export default Cart;