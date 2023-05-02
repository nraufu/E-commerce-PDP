import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import CartIcon from '../../assets/images/icon-cart.svg';

export default function Cart({ cartItems }) {
  const [showCart, setShowCart] = useState(false);

  const cartInfoClasses = clsx('navbar__cart-info', {
    'navbar__cart-info--show': showCart,
  });

  const cartRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);

  return (
        <div className="navbar__cart" ref={ cartRef }>
        { cartItems.length > 0 && <span className='navbar__cart-counter'>{ cartItems.length }</span> }
        <img src={ CartIcon } alt="shopping-bag" className="navbar__cart-icon" onClick={ () => setShowCart(!showCart) }/>
        <div className={ cartInfoClasses }>
          <span className="navbar__cart-info--title">Cart</span>
          <span className="navbar__cart-info--empty">Your cart is empty.</span>
          <div className="navbar__cart-info--items"></div>
        </div>
      </div>
  );
}
