import React from "react";
import "./home.css";
import About from "./about";
import Type from "./type";
import Project from "./project";
import Contact from "./contact";
import Lottie from 'lottie-react';
import coding from "../assets/95348-coding-boy.json"
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
function home() {
  const style = {
    height: 300,
  };
  return (
    <section className="sec-page">
      <div className="home-section">
        <div className="home-content">
            <div className="home-header">
              <h1 className="heading">
                Hi, I'm Sandeep!<br/>
              </h1>
              <div className="home-type">
                <Type /></div>
            </div>
            <div className="lottie">
              <Lottie animationData={coding} style={style}/>;
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