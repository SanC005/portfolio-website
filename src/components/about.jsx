import React from "react";
import "./about.css";

function about() {
  return (
    <section className="sec-home">
      <div className="home-section">
        <div className="about-row">
        <h2>About Myself</h2>
          <h3>
            I am pursuing my B.Tech in Computer Science from VIT Bhopal<br /> while
            learning new skills and knowledge, <br/>trying to satisfy my ever-growing
            curiosity.
          </h3>
        </div>

        <div className="skills">
          <div className="skill-row">
            <h2>My Skills.</h2>
            <h3>Web Development</h3>
            <h4>
              Skills include HTML,CSS and JavaScript.
              <br /> Libraries and Frameworks such as JQuery and Bootstrap.
              <br /> Made this personal website
            </h4>
          </div>
        </div>
        <div class="skill-row">
          <h3>App Development</h3>
          <h4>
            Skills include Java and Firebase.
            <br />
            I have created application such as Quiz App - used to conduct a test
            of multiple choice questions
            <br />
            and Club registration App - used to register for events conducted by
            the club.
          </h4>
        </div>
      </div>
    </section>
  );
}

export default about;
