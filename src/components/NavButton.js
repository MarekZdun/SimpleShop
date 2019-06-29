import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
    return (
        <li className={"nav-item ml-sm-1 " + (props.isActive ? "active" : "")}>
            <button className="btn btn-sm rounded-pill btn-secondary" type="button">
                <Link to={props.path} className="nav-link" onClick={props.onClick}>
                    {props.text}
                </Link>
            </button>
        </li>
    )
}

export default NavButton;