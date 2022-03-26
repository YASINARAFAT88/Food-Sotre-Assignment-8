import React from 'react';
import './Header.css';
import logo from './icon.jpg'

const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={logo} alt="" />
            <h1 className='site-name'>Food-Stor</h1>
        </nav>
    );
};

export default Header;