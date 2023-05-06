import React from 'react';

export default function Button({ type, onClick, children }) {
    return (
        <button className={ `button button--${type}` } onClick={ onClick }>
            { children }
        </button>
    );
}
