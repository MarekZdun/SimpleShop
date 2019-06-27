import React from 'react';
import NavLink from './NavLink';

const SignedInLinksLeft = () => {
    return (
        <ul className="navbar-nav ml-sm-5">
            <NavLink path='/' text='Products' isActive={false} />
        </ul>
    )
}

export default SignedInLinksLeft;