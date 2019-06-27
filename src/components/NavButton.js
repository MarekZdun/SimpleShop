import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
    return (
        <button className={"nav-item ml-sm-1 btn btn-sm rounded-pill btn-info " + (props.isActive ? "active" : "")} type="button">
            <Link to={props.path} className="nav-link" onClick={props.onClick}>
                {props.text}
            </Link>
        </button>
    )
}

export default NavButton;