import React from 'react';
import NavBarItem from './NavbarItem/NavbarItem';
import Logo from '../../assets/images/logo.svg';
import UserIcon from '../../assets/images/image-avatar.png';
import Cart from '../Cart/Cart';

export default function Navbar({ cartItems }) {
  const navItems = [
    { label: 'Collections', link: '/' },
    { label: 'Men', link: '/men' },
    { label: 'Women', link: '/women' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
  <nav className="navbar">
    <div className="navbar__right-part">
      <img src={ Logo } alt="logo" className="navbar__logo" />

      <ul className="navbar__menu">
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
