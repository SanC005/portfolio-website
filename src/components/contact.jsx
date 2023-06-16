import React from "react";
import "./contact.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <section id="contact" className="sec-contact">
      <div className="info-section">
        <h2 className="title" id="contact-title">Contact Me</h2>
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
        </div>
        </div>
      
    </section>
  );
}

export default Contact;
