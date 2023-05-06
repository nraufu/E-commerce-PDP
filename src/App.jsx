import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    return (
        <div id='app'>
            <Navbar cartItems={ cartItems }/>
            <ProductDetail addToCart={addItemToCart} />
        </div>
    );
}

export default App;
