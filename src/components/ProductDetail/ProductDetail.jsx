import React, { useState } from 'react';
import ProductImages from '../ProductImages/ProductImages';
import Button from '../UI/Button/Button';
import cartIcon from '../../assets/images/icon-cart.svg';
import plusIcon from '../../assets/images/icon-plus.svg';
import minusIcon from '../../assets/images/icon-minus.svg';
import ProductImage1 from '../../assets/images/image-product-1.jpg';
import ProductImage2 from '../../assets/images/image-product-2.jpg';
import ProductImage3 from '../../assets/images/image-product-3.jpg';
import ProductImage4 from '../../assets/images/image-product-4.jpg';

export default function ProductDetail({ addToCart }) {
    const [item, setItem] = useState(0);

    const product = {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.00,
        discount: 50,
        productImages: [
            {
                src: ProductImage1,
                alt: 'Product image 1',
            },
            {
                src: ProductImage2,
                alt: 'Product image 2',
            },
            {
                src: ProductImage3,
                alt: 'Product image 3',
            },
            {
                src: ProductImage4,
                alt: 'Product image 4',
            },
        ],
        getPriceAfterDiscount(){
            return (this.price - (this.price * (this.discount / 100))).toFixed(2);
        }
    };

    const handleItemsDecrementClick = () => {
        if(item > 0) {
            setItem(item - 1);
        }
    };

    const handleItemsIncrementClick = () => {
        setItem(item + 1);
    };

    const handleAddToCartClick = () => {
        if(item > 0) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.getPriceAfterDiscount(),
                mainImage: product.productImages[0].src,
                items: item,
            });
            setItem(0);
        }
    }

    return (
        <div className="product-detail">
            <div className="product-detail__left-part">
                <ProductImages productImgs={ product.productImages } />
            </div>

            <div className="product-detail__right-part">
                <h4 className='product-detail__subtitle'>Sneaker Company</h4>
                <h1 className='product-detail__title'>{ product.name }</h1>
                <p className='product-detail__description'>{ product.description }</p>

                <div className="product-detail__price">
                    <span className='product-detail__price--new'>{ product.getPriceAfterDiscount() }</span>
                    <span className="product-detail__price--discount">{ product.discount }%</span>
                    <span className="product-detail__price--old">{ product.price.toFixed(2) }</span>
                </div>

                <div className="product-detail__actions">
                    <div className="product-detail__quantity">
                        <button className={ `product-detail__quantity--btn ${ item === 0 && "product-detail__quantity--btn-disabled" }` } onClick={ handleItemsDecrementClick }>
                            <img className='product-detail__quantity--btn-icon' src={ minusIcon } alt="minus-icon" />
                        </button>
                        <span className="product-detail__quantity--counter">{ item }</span>
                        <button className="product-detail__quantity--btn" onClick={ handleItemsIncrementClick }>
                            <img className='product-detail__quantity--btn-icon' src={ plusIcon } alt="plus-icon" />
                        </button>
                    </div>

                    <Button type="primary" onClick={ handleAddToCartClick }>
                        <img className='product-detail__cart-icon' src={ cartIcon } alt="cart-icon" />
                        <span className='product-detail__cart-label'>Add to cart</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
