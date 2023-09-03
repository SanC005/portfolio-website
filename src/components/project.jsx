import React from "react";
import "./project.css"
// { name, description, topics, repo_url, deploy_url }
const projects = [
  {
    title: "Chimes",
    desc: ": A website to Get to know all the top trends in various popular social media websites at one glance.",
    technology: "Next JS, Tailwind CSS, JavaScript, HTML, Python, Flask ,React JS, Hooks, Material UI",
    live: "chimes-beta.vercel.app",
    code: "https://github.com/SanC005/chimes",
  },
  {
    title: "Glance",
    desc: ": A website to Get to know all the top trends in various popular social media websites at one glance.",
    technology: "Next JS, Tailwind CSS, JavaScript, HTML, Python, Flask ,React JS, Hooks, Material UI",
    live: "",
    code: "https://github.com/SanC005/Glance",
  },
  {
    title: "Housing Horizon",
    desc: "a website connected to a machine learning model to find out an estimate of real estate price of a location given the user requirements as various parameters.",
    technology: " HTML, CSS, Bootstrap, JavaScript, Python, Flask, MongoDB, Scikit-learn, NumPy",
    live: "",
    code: "https://github.com/SanC005/HousingHorizon",
  },
  {
    title: "ATM Safer Website",
    desc: " A website simulating security improvements that can be perform on existing ATM systems, providing customer the functions to withdraw & deposit from their account balance.",
    technology: " HTML, CSS, JavaScript, jQuery, NodeJS, Express JS, MongoDB",
    live: "",
    code: "https://github.com/SanC005/ATM-Safer-Website",
  },
  {
    title: "Go Quiz Application",
    desc: "This Application is used to test your knowledge with a quiz containing different types of questions like MCQs, true and false and multiple answer questions on your mobile phone and at the end check your score",
    technology: "Java Native, Android studio, XML, MVVM, SqLite",
    live: "",
    code: "https://github.com/SanC005/Go-Quiz-App",
  },
];
const Project = () => {

  return (
    <section id="project" className="sec-project">
      <div className="info-section">
        <h2 className="title-project">My Projects</h2>
        {projects.map((project, i) => {
          return (
            <div key={i} className="section">
              {/* <img src={project.img} alt={project.title} /> */}
              <div className="box">
                <p className="name"> {project.title}</p>
                <p className="description">
                  {project.desc}
                </p>
                <a href={project.code} className="code">{project.code}</a>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default Project;