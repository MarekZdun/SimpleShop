import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinksLeft = () => {
    return (
        <ul className="navbar-nav ml-sm-5">
            <li className="nav-item">
                <NavLink className="nav-link to='/' ">Products</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinksLeft;