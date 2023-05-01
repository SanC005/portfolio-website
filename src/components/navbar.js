import React from 'react';
import "./navbar.css";
// import {GitHubIcon} from '@mui/icons-material/GitHub';
import {FaGithub,FaLinkedin,} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
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
                <ul className='menu-ul'>
                    <li>
                        <a href="#home">
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="social">
                <ul className='social-ul'>
                    <li>
                        <a href="#github">
                        <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#linkedin">
                        <FaLinkedin/>
                        </a>
                    </li>
                    <li>
                        <a href="#email">
                            <AiOutlineMail/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}
export default Navbar;