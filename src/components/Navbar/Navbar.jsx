import React, { useState } from 'react';
import clsx from 'clsx';
import Cart from '../Cart/Cart';
import NavBarItem from './NavbarItem/NavbarItem';
import UserIcon from '../../assets/images/image-avatar.png';
import CloseIcon from '../../assets/icons/icon-close.svg';
import MenuIcon from '../../assets/icons/icon-menu.svg';
import CartIcon from '../../assets/icons/icon-cart.svg';
import Logo from '../../assets/icons/logo.svg';

export default function Navbar({ cartItems, removeCartItem }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

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
    const handleToggleShowCart = () => setShowCart(!showCart);

    const itemsTotal = cartItems.reduce((total, item) => total + item.items, 0);

    return (
        <nav className={ navbarClass }>
            { showMenu && <div className='navbar__overlay' onClick={ handleToggleMenuClick }></div> }
            <div className="navbar__right-part">
                <img
                    src={ MenuIcon }
                    alt="menu-icon"
                    className='navbar__hamburger-menu navbar__hamburger-menu--open'
                    onClick={ handleToggleMenuClick }
                />
                <img src={ Logo } alt="brand-logo" className='navbar__logo' />

                <ul className="navbar__menu">
                    <img
                        src={ CloseIcon }
                        alt="opened-menu"
                        role='button'
                        className='navbar__hamburger-menu navbar__hamburger-menu--close'
                        onClick={ handleToggleMenuClick }
                    />

                    { navItems.map((item, index) => (
                        <NavBarItem key={ index } label={ item.label } link={ item.link } />
                    )) }
                </ul>
            </div>

            <div className="navbar__left-part">
                <div className="navbar__cart" role='button' onClick={ handleToggleShowCart }>
                    { cartItems.length > 0 && <span className='navbar__cart--counter'>{ itemsTotal }</span> }
                    <img src={ CartIcon } alt='cart-icon' className="navbar__cart--icon" />
                </div>
                <img src={ UserIcon } alt="user-img" className='navbar__user-icon' />
            </div>

            <Cart
                cartItems={ cartItems }
                showCart={ showCart }
                removeCartItem={ removeCartItem }
                handleCartClose={ () => setShowCart(false) }
            />
        </nav>
    );
}
