import "./navbar.css";
import React from "react";
// import { useState,useEffect } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import {GitHubIcon} from '@mui/icons-material/GitHub';
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
// import {GiHamburgerMenu} from "react-icons/gi-hamburger-menu";
import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from '@mui/material/Drawer';
const Navbar = () => {
  // const [showMenu,setShowMenu] = useState(false);
  const resume =
    "https://drive.google.com/file/d/1wKV7w_kyWtevduaE6u9e0EL-zxBfp1Vj/view?usp=sharing";
  const mailtoHref =
    "mailto:sandeepcs005@gmail.com?subject=SendMail&body=Description";
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = () => setToggle(!toggle);

  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNavbar = () => {
  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
  //       setShow(false);
  //     } else { // if scroll up show the navbar
  //       setShow(true);
  //     }

  //     // remember current page location to use in the next move
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlNavbar);

  //     // cleanup function
  //     return () => {
  //       window.removeEventListener('scroll', controlNavbar);
  //     };
  //   }
  // }, [lastScrollY]);
  return (
    <div>
      <nav className="main">
        <a href={resume} target="_blank" without rel="noreferrer">
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
              <a
                href="https://github.com/SanC005"
                className="icons"
                target="_blank"
                without
                rel="noreferrer"
              >
                <FaGithub size={30} style={{ color: "#FFFFFF" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sanc005/"
                target="_blank"
                without
                rel="noreferrer"
                className="icons"
              >
                <FaLinkedin size={30} style={{ color: "#FFFFFF" }} />
              </a>
            </li>
            <li>
              <a href={mailtoHref} className="icons">
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
