import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    return (
        <li className={"nav-item " + (props.isActive ? "active" : "")}>
            <Link to={props.path} className="nav-link" onClick={props.onClick}>
                {props.text}
            </Link>
        </li>
    )
}

export default NavLink;