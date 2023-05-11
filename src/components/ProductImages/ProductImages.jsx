import React, { useState } from 'react';
import clsx from 'clsx';
import Modal from '../UI/Modal/Modal';
import prevIcon from '../../assets/images/icon-previous.svg';
import nextIcon from '../../assets/images/icon-next.svg';

export default function ProductImages({ productImgs }) {
    const [selectImgIndex, setSelectImgIndex] = useState(0);
    const [selectLightboxImgIndex, setSelectLightboxImgIndex] = useState(0); // used for lightbox control only
    const [showLightBox, setShowLightBox] = useState(false);

    const handleThumbnailClick = (index) => {
        setSelectImgIndex(index);
        setSelectLightboxImgIndex(index);
    };

    const handleLightBoxThumbnailClick = (index) => {
        setSelectLightboxImgIndex(index);
    };

    const handleToggleShowLightBox = () => {
        setShowLightBox(!showLightBox);
    };

    return (
        <div className="product-images">
            <ImagesGallery
                isLightBox={ false }
                activeImage={ selectImgIndex }
                imagesList={ productImgs }
                handleThumbnailClick={ handleThumbnailClick }
                toggleShowLightBox={ handleToggleShowLightBox }
            />

            { /* Lightbox */ }
            { showLightBox && (
                <Modal closeModal={ handleToggleShowLightBox }>
                    <ImagesGallery
                        isLightBox={ true }
                        activeImage={ selectLightboxImgIndex }
                        imagesList={ productImgs }
                        handleThumbnailClick={ handleLightBoxThumbnailClick }
                    />
                </Modal>
            ) }
        </div>
    );
}

function ImagesGallery({ isLightBox, handleThumbnailClick, activeImage, imagesList, toggleShowLightBox }) {
    const imagesGalleryClass = clsx('images-gallery', {
        'images-gallery--lightbox': isLightBox,
    });

    const handleActiveImageClick = () => {
        if (!isLightBox) {
            toggleShowLightBox();
        }
    };

    const handlePrevClick = () => {
        if (activeImage > 0) {
            handleThumbnailClick(activeImage - 1);
        }
    };

    const handleNextClick = () => {
        if (activeImage < imagesList.length - 1) {
            handleThumbnailClick(activeImage + 1);
        }
    };

    return (
        <div className={ imagesGalleryClass }>
            <div className="images-gallery__main-image" role='button' onClick={ handleActiveImageClick }>
                <img src={ imagesList[activeImage].src } alt={ imagesList[activeImage].alt } />
                { isLightBox && (
                    <>
                        <button className='images-gallery__arrow images-gallery__arrow--left' onClick={ handlePrevClick }>
                            <img src={ prevIcon } alt="prev-icon" />
                        </button>

                        <button className='images-gallery__arrow images-gallery__arrow--right' onClick={ handleNextClick }>
                            <img src={ nextIcon } alt="next-icon" />
                        </button>
                    </>
                ) }
            </div>

            <div className="images-gallery__thumbnails">
                { imagesList.map((productImage, index) => (
                    <div
                        className={
                            `images-gallery__thumbnails-item ${activeImage === index && 'images-gallery__thumbnails-item--active'}`
                        }
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
