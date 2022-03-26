import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newProduct = [...cart, product.name];
        setCart(newProduct);
    }

    const randomChoose = () => {
        let randomChoose = cart[Math.floor(Math.random() * cart.length)];
        setChoose(randomChoose);
    }
    //clear shopping cart
    const clearCart = () => {
        setCart([]);
        setChoose([]);
    }

    return (
        <div className='main-container'>
            <div className="products">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart">
                {
                    <h2>Order summary</h2>
                }
                {
                    cart.map(singleProduct => <Cart
                        singleProduct={singleProduct}
                        key={singleProduct.id}
                    ></Cart>)
                }
                {
                    <div className='lucky-router'>
                        <h1>Your Lucky Router is: </h1>
                        <h4>{choose}</h4>
                    </div>
                }
                {
                    <div className='btn-container'>
                        <button onClick={randomChoose} className='other-btn'>Choose 1 For Me</button>
                        <button onClick={clearCart} className='other-btn'>Choose Again</button>
                    </div>

                }
            </div>
        </div>
    );
};

export default Main;