import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        // check if item is already in cart
        const isAlreadyAdded = cartItems.findIndex((cartItem) => cartItem.productID === item.productID);
        if (isAlreadyAdded !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[isAlreadyAdded].items += item.items;
            setCartItems(newCartItems);
            return;
        }
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    const deleteItemFromCart = (index) => {
        setCartItems((prevCartItems) => prevCartItems.slice(0, index).concat(prevCartItems.slice(index + 1)));
    };

    return (
        <div id='app'>
            <Navbar cartItems={ cartItems } removeCartItem={ deleteItemFromCart } />
            <ProductDetail addToCart={ addItemToCart } />
        </div>
    );
}

export default App;
