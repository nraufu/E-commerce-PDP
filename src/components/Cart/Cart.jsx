import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import Button from '../UI/Button/Button';
import removeIcon from '../../assets/icons/icon-delete.svg';

export default function Cart({ cartItems, showCart, removeCartItem, handleCartClose }) {
    const cartRef = useRef(null);

    const cartInfoClasses = clsx('cart', {
        'cart--open': showCart,
    });

    const handleItemRemove = (id) => {
        removeCartItem(id);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target) && event.target.parentNode !== cartRef.current) {
                handleCartClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <div className={ cartInfoClasses } ref={ cartRef }>
            <span className="cart__title">Cart</span>
            { cartItems.length === 0 && <span className="cart__empty">Your cart is empty.</span> }
            { cartItems.length > 0 && (
                <div className="cart__items">
                    { cartItems.map((item, index) => (
                        <div className="cart__item" key={ index }>
                            <img className="cart__item--image" src={ item.mainImage } alt={ item.name } />
                            <div className="cart__item--info">
                                <p className="cart__item--name">{ item.name }</p>
                                <div className="cart__item--info-sub">
                                    <p className="cart__item--quantity">${ item.price } x { item.items }</p>
                                    <p className="cart__item--total">${ (item.items * item.price).toFixed(2) }</p>
                                </div>
                            </div>
                            <button className="cart__item--remove" type="secondary" onClick={ () => handleItemRemove(index) }>
                                <img src={ removeIcon } alt="remove-icon" />
                            </button>
                        </div>
                    )) }

                    <Button type="primary">
                        <span className='cart__btn-label'>Checkout</span>
                    </Button>
                </div>
            ) }
        </div>
    );
}
