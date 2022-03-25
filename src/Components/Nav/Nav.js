import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='navbar'>
            <h1>Router Shopper</h1>
            <div>
                <a href="/shop">Cart</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Nav;