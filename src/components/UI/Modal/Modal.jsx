import React from 'react';
import closeIcon from '../../../assets/images/icon-close.svg';

export default function Modal({ children, closeModal }) {
    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={ closeModal }>
                    <img src={ closeIcon } alt="close-icon" />
                </button>
                { children }
            </div>
        </div>
    );
}
