import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import Cart from '../Cart/Cart';
import NavBarItem from './NavbarItem/NavbarItem';
import Logo from '../../assets/images/logo.svg';
import UserIcon from '../../assets/images/image-avatar.png';
import MenuIcon from '../../assets/images/icon-menu.svg';
import CloseIcon from '../../assets/images/icon-close.svg';
import CartIcon from '../../assets/images/icon-cart.svg';

export default function Navbar({ cartItems }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const ref = useRef(null);

    const navItems = [
        { label: 'Collections', link: '/' },
        { label: 'Men', link: '/men' },
        { label: 'Women', link: '/women' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
    ];

    const navbarClass = clsx('navbar', {
        'navbar--open': showMenu,
    });

    const handleToggleMenuClick = () => setShowMenu(!showMenu);

    const itemsTotal = cartItems.reduce((total, item) => total + item.items, 0);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current
          && !ref.current.contains(event.target)
          && event.target.parentNode !== ref.current
            ) {
                setShowCart(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <nav className={ navbarClass } ref={ ref }>
            <div className="navbar__right-part">
                <button className='navbar__hamburger-menu' onClick={ handleToggleMenuClick }>
                    <img src={ MenuIcon } alt="closed-menu" className='navbar__hamburger-menu--open'/>
                </button>
                <img src={ Logo } alt="logo" className="navbar__logo" />

                <ul className="navbar__menu">
                    <button className='navbar__hamburger-menu' onClick={ handleToggleMenuClick }>
                        <img src={ CloseIcon } alt="opened-menu" className='navbar__hamburger-menu--close' />
                    </button>
                    { navItems.map((item, index) => (
                        <NavBarItem key={ index } label={ item.label } link={ item.link } />
                    )) }
                </ul>
            </div>

            <div className="navbar__left-part">
                <div className="navbar__cart" role='button' onClick={ () => setShowCart(!showCart) }>
                    { cartItems.length > 0 && <span className='navbar__cart--counter'>{ itemsTotal }</span> }
                    <img src={ CartIcon } alt="shopping-bag" className="navbar__cart--icon"/>
                </div>
                <img src={ UserIcon } alt="user-img" className='navbar__user-icon' />
            </div>

            <Cart cartItems={ cartItems } showCart={ showCart }/>
        </nav>);
}
