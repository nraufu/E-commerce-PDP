import React, { useState } from 'react';

export default function ProductImages({ productImgs }) {
    const [mainImage, setMainImage] = useState(0);

    function handleThumbnailClick(index) {
        setMainImage(index);
    }

    return (
        <div className="product-images">
            <div className="product-images__main-image">
                <img src={ productImgs[mainImage].src } alt={ productImgs[mainImage].alt } />
            </div>

            <div className="product-images__thumbnails">
                { productImgs.map((productImage, index) => (
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
