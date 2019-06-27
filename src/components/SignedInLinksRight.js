import React from 'react';
import NavLink from './NavLink';

const SignedInLinksRight = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink path='/' text='Log Out' />
            </li>
            <li className="nav-item">
                <NavLink path='/' text='Log Out' />
            </li>
        </ul>
    )
}

export default SignedInLinksRight;