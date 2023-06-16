// import React from "react";
// import Project from "./project";
// import getRepositories from "portfolio-project";
// async function getData() {
//     const [projects, setProjects] = React.useState([]);
//     const response = await getRepositories("gauravgulati15")
//     .then((result) => {
//       setProjects(result);
//       console.log("hi")
//     })
//     .catch((error) => {
//       console.log(error);
//     });
  
//     const data = await response.json();
//     return data;
  
//   }
// const ProjectList = async () => {
  
//   const data = await getData();
//   console.log(data);
  

//   return (
//     <section className="section">
//       <h2 className="section-title">Projects</h2>
//       <div className="projects-center">
//         {data.map((item) => {
//           return <Project key={item.id} {...item} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectList;