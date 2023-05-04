import React from 'react';
import clsx from 'clsx';

// eslint-disable-next-line no-unused-vars
export default function Cart({ cartItems, showCart }) {
    const cartInfoClasses = clsx('cart', {
        'cart--open': showCart,
    });

    return (
        <div className={ cartInfoClasses }>
            <span className="cart__title">Cart</span>
            { cartItems.length === 0 && <span className="cart__empty">Your cart is empty.</span> }
            <div className="cart__items"></div>
        </div>
    );
}
