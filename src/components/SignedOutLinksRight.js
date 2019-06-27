import React from 'react';
import NavLink from './NavLink';

const SignedOutLinksRight = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <NavLink path='/' text='Signup' isActive={false} onClick={() => {}} />
            <NavLink path='/' text='Login' isActive={false} onClick={() => {}} />
            <NavLink path='/' text='Search' isActive={false} onClick={() => {}} />
            <NavLink path='/' text='Cart' isActive={false} onClick={() => {}} />
        </ul>
    )
}

export default SignedOutLinksRight;