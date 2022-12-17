import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "./helpers/ProjectList";
import { FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import "./projectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    // <div className="project">
    //   <h1>{project.name}</h1>
    //   <img src={project.image} alt="" />
    //   <p style={{ color: "black" }}>Skills: {project.skills}</p>
    //   <FaGithub />
    // </div>
    // ---------------------------------

    <div className="container py-4 my-4 mx-auto d-flex flex-column">
      <div className="header">
        <div className="row r1">
          <div className="col-md-9 abc">
            <h1>{project.name}</h1>
          </div>

          <div className="col-md-2 myt des">
            <Link to="/">
              <AiFillHome /> Home
            </Link>
          </div>
        </div>
      </div>
      <div className="container-body mt-4">
        <div className="row r3">
          <div className="col-md-5 p-0 klo">
            <h2>
              Details : <br />
            </h2>
            <p> {project.detail} </p>
            <h2>
              Skills : <br />
            </h2>
            <ul>
              <h4>{project.skills}</h4>
            </ul>
            <ul>
              <FaGithub size="6rem" color="black" />
            </ul>
          </div>

          <div className="col-md-7">
            {" "}
            <img src={project.image} width="90%" height="95%" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>

    //---------------------
  );
};

export default ProjectDisplay;
