import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import ImagesGallery from '../UI/GalleryImages/GalleryImages';

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
