import React, { useState } from 'react';
import ProductImages from '../ProductImages/ProductImages';
import Button from '../UI/Button/Button';
import cartIcon from '../../assets/images/icon-cart.svg';
import plusIcon from '../../assets/images/icon-plus.svg';
import minusIcon from '../../assets/images/icon-minus.svg';

export default function ProductDetail({addToCart}) {
    const [item, setItem] = useState({
        items: 0,
        name: 'Fall Limited Edition Sneakers',
        price: 125.00,
    });

    const handleItemsDecrementClick = () => {
        if(item.items > 0) {
            setItem({
                ...item,
                items: item.items - 1,
            });
        }
    };

    const handleItemsIncrementClick = () => {
        setItem({
            ...item,
            items: item.items + 1,
        });
    };

    const handleAddToCartClick = () => {
        addToCart(item);
        setItem({
            ...item,
            items: 0,
        });
    }

    return (
        <div className="product-detail">
            <div className="product-detail__left-part">
                <ProductImages />
            </div>

            <div className="product-detail__right-part">
                <h4 className='product-detail__subtitle'>Sneaker Company</h4>
                <h1 className='product-detail__title'>Fall Limited Edition Sneakers</h1>
                <p className='product-detail__description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className="product-detail__price">
                    <span className='product-detail__price--new'>125.00</span>
                    <span className="product-detail__price--discount">50%</span>
                    <span className="product-detail__price--old">250.00</span>
                </div>

                <div className="product-detail__actions">
                    <div className="product-detail__quantity">
                        <button className={`product-detail__quantity--btn ${item.items === 0 && "product-detail__quantity--btn-disabled"}`} onClick={ handleItemsDecrementClick }>
                            <img className='product-detail__quantity--btn-icon' src={minusIcon} alt="minus-icon" />
                        </button>
                        <span className="product-detail__quantity--counter">{ item.items }</span>
                        <button className="product-detail__quantity--btn" onClick={ handleItemsIncrementClick }>
                            <img className='product-detail__quantity--btn-icon' src={plusIcon} alt="plus-icon" />
                        </button>
                    </div>

                    <Button type="primary" onClick={handleAddToCartClick}>
                        <img className='product-detail__cart-icon' src={cartIcon} alt="cart-icon" />
                        <span className='product-detail__cart-label'>Add to cart</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
