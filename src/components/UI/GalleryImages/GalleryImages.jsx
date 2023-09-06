/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function ImagesGallery({ isLightBox, handleThumbnailClick, activeImage, imagesList, toggleShowLightBox }) {
    let imagesContainer = null;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        // Function to update "isMobile" based on window width
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateIsMobile);

        // Initial call to set "isMobile" on component mount
        updateIsMobile();

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    const imagesGalleryClass = clsx('images-gallery', {
        'images-gallery--lightbox': isLightBox,
    });

    const handleActiveImageClick = () => {
        if (!isLightBox && !isMobile) {
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

    if (isMobile) {
        imagesContainer = (
            <Swiper
                className="images-gallery__active-image"
                modules={ [Navigation] }
                navigation={ {
                    prevEl: '.images-gallery__arrow--left',
                    nextEl: '.images-gallery__arrow--right',
                } }
            >
                { imagesList.map((productImage, index) => (
                    <SwiperSlide
                        className="images-gallery__active-image--img"
                        key={ index }
                    >
                        <img src={ productImage.src } alt={ productImage.alt } />
                    </SwiperSlide>
                )) }

                <>
                    <button className='images-gallery__arrow images-gallery__arrow--left'>
                        <span className='images-gallery--icon fi fi-angle-left'></span>
                    </button>

                    <button className='images-gallery__arrow images-gallery__arrow--right'>
                        <span className='images-gallery--icon fi fi-angle-right'></span>
                    </button>
                </>
            </Swiper>
        );
    } else {
        imagesContainer = (
            <div className="images-gallery__active-image" role='button' onClick={ handleActiveImageClick }>
                <div className="images-gallery__active-image--img">
                    <img src={ imagesList[activeImage].src } alt={ imagesList[activeImage].alt } />
                </div>
                { isLightBox && (
                    <>
                        <button className='images-gallery__arrow images-gallery__arrow--left' onClick={ handlePrevClick }>
                            <span className="images-gallery--icon fi fi-angle-left"></span>
                        </button>

                        <button className='images-gallery__arrow images-gallery__arrow--right' onClick={ handleNextClick }>
                            <span className="images-gallery--icon fi fi-angle-right"></span>
                        </button>
                    </>
                ) }
            </div>
        );
    }

    return (
        <div className={ imagesGalleryClass }>
            { imagesContainer }

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
