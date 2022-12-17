import React from "react";
import mee from "./img/gomycode.png";

const CertifItem = ({ e }) => {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${e.image})` }} className="bgImage" />
      <h1 style={{ color: "#ffc000", marginTop: "2rem" }}>{e.name}</h1>
      <h5 style={{ color: "#3B3B3B" }}>{e.univer}</h5>
    </div>
  );
};

export default CertifItem;
