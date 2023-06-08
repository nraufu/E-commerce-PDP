import React, { useState } from 'react';
import clsx from 'clsx';
import Cart from '../Cart/Cart';
import NavBarItem from './NavbarItem/NavbarItem';
import Logo from '../../assets/images/logo.svg';
import UserIcon from '../../assets/images/image-avatar.png';
import MenuIcon from '../../assets/images/icon-menu.svg';
import CloseIcon from '../../assets/images/icon-close.svg';
import CartIcon from '../../assets/images/icon-cart.svg';

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
                <div className="navbar__cart" role='button' onClick={ handleToggleShowCart }>
                    { cartItems.length > 0 && <span className='navbar__cart--counter'>{ itemsTotal }</span> }
                    <img src={ CartIcon } alt="shopping-bag" className="navbar__cart--icon"/>
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
