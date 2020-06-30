import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/home'>Home</Link>
            <Link className='navbar-brand' to='/projects'>Projects</Link>
            <Link className='navbar-brand' to='/about'>About me</Link>
        </div>
    </nav>
);

export default Header
