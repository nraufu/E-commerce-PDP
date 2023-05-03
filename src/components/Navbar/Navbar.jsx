import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import Cart from '../Cart/Cart';
import NavBarItem from './NavbarItem/NavbarItem';
import Logo from '../../assets/images/logo.svg';
import UserIcon from '../../assets/images/image-avatar.png';
import MenuIcon from '../../assets/images/icon-menu.svg';
import CloseIcon from '../../assets/images/icon-close.svg';

export default function Navbar({ cartItems }) {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (showMenu && menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
  <nav className={ navbarClass }>
    <div className="navbar__right-part">
      <button className='navbar__hamburger-menu' onClick={ handleToggleMenuClick }>
        <img src={ MenuIcon } alt="closed-menu" className='navbar__hamburger-menu--open'/>
      </button>
      <img src={ Logo } alt="logo" className="navbar__logo" />

      <ul className="navbar__menu" ref={ menuRef }>
        <button className='navbar__hamburger-menu' onClick={ handleToggleMenuClick }>
          <img src={ CloseIcon } alt="opened-menu" className='navbar__hamburger-menu--close' />
        </button>
        { navItems.map((item, index) => (
          <NavBarItem key={ index } label={ item.label } link={ item.link } />
        )) }
      </ul>
    </div>

    <div className="navbar__left-part">
      <Cart cartItems={ cartItems }/>
      <img src={ UserIcon } alt="user-img" className='navbar__user-icon' />
    </div>
  </nav>);
}
