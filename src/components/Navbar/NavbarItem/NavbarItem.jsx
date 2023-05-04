import React from 'react';

export default function NavBarItem({ label, link }) {
    return (
        <li className="navbar__menu-item">
            <a href={ link } className='navbar__menu-link'>{ label }</a>
        </li>
    );
}
