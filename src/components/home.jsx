import React from "react";
import "./home.css";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

function home() {
  return (
    <section className="sec-home">
      <div className="home-section" id="home">
        {/* <Particle /> */}
        <div className="home-content">

            <div className="home-header">
              <h1 className="heading">
                Hi, I'm Sandeep!
              </h1>
              <h1 className="heading">
                I'm a Web Developer!
              </h1>
            </div>
        </div>
      </div>
    </section>
  );
}

export default home;