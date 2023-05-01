import React from 'react';
import "./navbar.css";
const Navbar = () => {
    return(
    <>
        <nav className="main">
            <div className="logo">
                <h2>
                    logo
                </h2>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}
export default Navbar;