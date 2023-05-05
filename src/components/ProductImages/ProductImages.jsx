import React, { useState } from 'react';
import ProductImage1 from '../../assets/images/image-product-1.jpg';
import ProductImage2 from '../../assets/images/image-product-2.jpg';
import ProductImage3 from '../../assets/images/image-product-3.jpg';
import ProductImage4 from '../../assets/images/image-product-4.jpg';

export default function ProductImages() {
    const [mainImage, setMainImage] = useState(0);
    const productImages = [
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
    ];

    function handleThumbnailClick(index) {
        setMainImage(index);
    }

    return (
        <div className="product-images">
            <div className="product-images__main-image">
                <img src={ productImages[mainImage].src } alt={ productImages[mainImage].alt } />
            </div>

            <div className="product-images__thumbnails">
                { productImages.map((productImage, index) => (
                    <div
                        className={ `product-images__thumbnails-item ${mainImage === index && 'product-images__thumbnails-item--active'}` }
                        key={ index }
                        role='button'
                        onClick={ () => handleThumbnailClick(index) }
                    >
                        <img src={ productImage.src } alt={ productImage.alt } />
                    </div>
                )) }
            </div>
        </div>
    );
}
