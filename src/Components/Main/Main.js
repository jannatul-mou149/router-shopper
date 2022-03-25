import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newName = [...cart, product.name];
        setCart(newName);
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
                    ></Cart>)
                }
                {
                    <div>
                        <button className='other-btn'>Choose 1 For Me</button>
                        <button className='other-btn'>Choose Again</button>
                    </div>

                }
            </div>
        </div>
    );
};

export default Main;