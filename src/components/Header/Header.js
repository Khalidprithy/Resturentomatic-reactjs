import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';

import './Header.css'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div className='title'>
                <h1>Resturentomatic</h1>
                <GiKnifeFork></GiKnifeFork>
            </div>
            <div className='nav-links'>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div>
                <input className='search-input' type="text" placeholder='Search a meal' />
                <button className='search-button'>Search</button>
            </div>
        </nav>
    );
};

export default Header;