import React from "react";
import { Data } from "./Data";
import CertifItem from "./CertifItem";
import "./certif.css";

const Certif = () => {
  return (
    <div className="projects">
      <h1 style={{ color: "black" }}> Certifications</h1>
      <div className="projectList">
        {Data.map((e) => {
          return <CertifItem e={e} />;
        })}
      </div>
    </div>
  );
};

export default Certif;
