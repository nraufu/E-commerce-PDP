import React from 'react';

export default function Modal({ children, closeModal }) {
    return (
        <div className="modal">
            <div className="modal__content">
                <button className="modal__close" onClick={ closeModal }>
                    <span className="modal__close--icon fi fi-close-a"></span>
                </button>
                { children }
            </div>
        </div>
    );
}
