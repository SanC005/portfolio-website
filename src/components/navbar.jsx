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
                    <li className="menu-li">
                        <a href="#home">
                        <h3>Home</h3>
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                        <h3>Projects</h3>
                        </a>
                    </li>
                    <li>
                        <a href="#about"><h3>About</h3></a>
                    </li>
                    <li>
                        <a href="#contact"><h3>Contact</h3></a>
                    </li>
                </ul>
            </div>
            <div className="social">
                <ul className='social-ul'>
                    <li >
                        <a href="#github" className='icons'>
                        <FaGithub size={30}/>
                        </a>
                    </li>
                    <li >
                        <a href="#linkedin" className='icons'>
                        <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li >
                        <a href="#email" className='icons'>
                            <AiOutlineMail size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}
export default Navbar;