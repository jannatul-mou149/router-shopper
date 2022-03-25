import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='main-container'>
            <div className="products">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Main;