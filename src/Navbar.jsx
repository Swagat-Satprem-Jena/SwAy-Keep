import React from "react";
import './Navbar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand logo-and-name" href="#">
                        <img src="https://www.google.com/images/icons/product/keep-512.png" alt="" width="40" height="40" className="d-inline-block align-text-top logo-img"/>
                            <h4 className="logo-text">Sway Keep</h4>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar; 