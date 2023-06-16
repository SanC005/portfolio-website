import React from "react";
import "./about.css";

function about() {
  return (
    <section className="sec-about">
      <div className="info-section">
        <h2 className="title">About Myself</h2>
          <h3 className="desc">
            I am pursuing my B.Tech in Computer Science from VIT Bhopal<br /> while
            learning new skills and knowledge, <br/>trying to satisfy my ever-growing
            curiosity.
          </h3>
        </div>
      <div class="tech">
      <h2 className="title">My Skills</h2>
      <p>🛠️ Languages and Tools:</p>
      <p className="icons"
      align="center"><a href="https://github.com/SanC005"><img className="icon" src="https://skillicons.dev/icons?i=react,nextjs,cpp,py,java,html,css,tailwind,js,nodejs,expressjs,mongodb,aws,gcp,vscode,androidstudio,tensorflow,flask&perline=9" alt="My Skills"/></a></p>
      </div>
    </section>
  );
}

export default about;
