import React from 'react';
import NavLink from './NavLink';
import NavButton from './NavButton';

const SignedInLinksRight = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <NavLink path='/' text='Log Out' isActive={false} onClick={() => {}} />
            <NavButton path='/' text='MZ' isActive={false} onClick={() => {}} />
            <NavLink path='/' text='Search' isActive={false} onClick={() => {}} />
            <NavLink path='/' text='Cart' isActive={false} onClick={() => {}} />
        </ul>
    )
}

export default SignedInLinksRight;