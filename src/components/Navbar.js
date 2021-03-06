import React from 'react'
import { Link } from 'react-router-dom'
import SignedOutLinksLeft from './SignedOutLinksLeft'
import SignedInLinksRight from './SignedInLinksRight'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">  
                <Link to='/' className="navbar-brand">SimpleShop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <SignedOutLinksLeft />
                    <SignedInLinksRight />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
