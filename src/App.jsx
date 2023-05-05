import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [cartItems, setCartItems] = useState([]);

    return (
        <div id='app'>
            <Navbar cartItems={ cartItems }/>
            <ProductDetail />
        </div>
    );
}

export default App;
