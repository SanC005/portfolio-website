import React from "react";
import "./home.css";
import About from "./about";
import Type from "./type";
import Project from "./project";
import Contact from "./contact";
function home() {
  return (
    <section className="sec-home">
      <div className="home-section" id="home">
        <div className="home-content">
            <div className="home-header">
              <h1 className="heading">
                Hi, I'm Sandeep!<br/>
                I'm a Web Developer!<br/>
              </h1>
              <div className="home-type"><Type /></div>
              
            </div>
                
        </div>
      </div>
      <About/>
      <Project/>
      <Contact/>
    </section>
    
  );
}

export default home;