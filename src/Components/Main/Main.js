import React, { useEffect, useState } from 'react';
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
                <h3>This is for Products: {products.length}</h3>
            </div>
            <div className="cart">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Main;