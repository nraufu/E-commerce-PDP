import React from 'react';
import Logo from '../assets/images/logo.png';

const Welcome = () => (
    <div className='welcome'>
        <img className='welcome__logo' src={Logo} alt="logo" />
        <h1 className='welcome__text'>Project start</h1>
    </div>
);

export default Welcome;
