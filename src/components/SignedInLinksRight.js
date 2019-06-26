import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinksRight = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link to='/' ">Sign up</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinksRight;