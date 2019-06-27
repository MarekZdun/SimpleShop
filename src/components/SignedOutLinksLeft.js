import React from 'react';
import NavLink from './NavLink';

const SignedOutLinksLeft = () => {
    return (
        <ul className="navbar-nav ml-sm-5">
            <NavLink path='/' text='Products' isActive={false} onClick={() => {}} />
        </ul>
    )
}

export default SignedOutLinksLeft;