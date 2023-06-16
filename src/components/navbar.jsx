import "./navbar.css";
import React from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import {GitHubIcon} from '@mui/icons-material/GitHub';
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
// import {GiHamburgerMenu} from "react-icons/gi-hamburger-menu";
import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from '@mui/material/Drawer';
const Navbar = () => {
  // const [showMenu,setShowMenu] = useState(false);
  const resume = "https://www.google.com";
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = () => setToggle(!toggle);
  return (
    <div>
      <nav className="main">
          <a href={resume} target="_blank"
              without
              rel="noreferrer">
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
              <a href="/#project">
                <h3>Projects</h3>
              </a>
            </li>
            <li>
              <a href="/#about">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <a href="/#contact">
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
      {/* mobile navbar */}

      {/* <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav> */}

      {/* Toggle button */}
      {/* <div><button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button></div> */}
      
    </div>
  );
};

export default Navbar;
