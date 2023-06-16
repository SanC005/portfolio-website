import React from "react";
import "./navbar.css";
// import {GitHubIcon} from '@mui/icons-material/GitHub';
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
// import {GiHamburgerMenu} from "react-icons/gi-hamburger-menu";
import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from '@mui/material/Drawer';
const Navbar = () => {
  // const [showMenu,setShowMenu] = useState(false);
  const resume = "https://www.google.com"
  return (
    <>
      <nav className="main">
          <a href={resume}>
        <div className="logo">
            <FaFile size={30} style={{ color: "#FFFFFF" }} />
            <h3>My Resume</h3>
        </div>
          </a>
        <div className="menu">
          <ul className="menu-ul">
            <li className="menu-li">
              <a href="/">
                <h3>Home</h3>
              </a>
            </li>
            <li>
              <a href="#project">
                <h3>Projects</h3>
              </a>
            </li>
            <li>
              <a href="#about">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <a href="#contact">
                <h3>Contact</h3>
              </a>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul className="social-ul">
            <li>
              <a href="https://github.com/SanC005" className="icons">
                <FaGithub size={30} style={{ color: "#FFFFFF" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sandeep-chiluvuru-2b6069211/"
                className="icons"
              >
                <FaLinkedin size={30} style={{ color: "#FFFFFF" }} />
              </a>
            </li>
            <li>
              <a href="#email" className="icons">
                <AiOutlineMail size={30} style={{ color: "#FFFFFF" }} />
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <a href="#a">
              <MenuIcon fontSize="large" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
