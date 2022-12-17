import React from "react";
import ProjectItem from "./ProjectItem";
import mee from "../../assets/Home/me.jpg";
import "./project.css";
import { ProjectList } from "./helpers/ProjectList";

const Project = () => {
  return (
    <div className="projects">
      <h1 style={{ color: "black" }}> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
