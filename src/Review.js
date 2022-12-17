import React from "react";
import About from "./PortfolioContainer/AboutMe/About";
import Certif from "./PortfolioContainer/Certif/Certif";
import Skills from "./PortfolioContainer/competence/Skills";
import Footer from "./PortfolioContainer/Home/Footer/Footer";
import Home from "./PortfolioContainer/Home/Home";
import Project from "./PortfolioContainer/Project/Project";
import Certifications from "./PortfolioContainer/Resume/Certifications";
import Resume from "./PortfolioContainer/Resume/Resume";

const Review = () => {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Skills />
      <Certif />
      <Resume />
      <Footer />
    </div>
  );
};

export default Review;
