import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { singleProduct } = props;
    return (

        <div className='cart-product'>
            <li>{singleProduct}</li>
        </div>

    );
};

export default Cart;