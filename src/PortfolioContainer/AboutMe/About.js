import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./About.css";

const About = () => {
  return (
    <>
      <section style={{ borderRadius: "5rem" }}>
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            About me
          </div>
          <article className="postcard dark yellow">
            <img className="postcard__img" src="../../../me.jpg" alt="Title" />

            <div className="postcard__text">
              <h1 className="postcard__title yellow">Hello ..</h1>
              <br />
              <div className="postcard__subtitle small">
                <i className="fas fa-calendar-alt mr-2" />I am Nidhal Rebhi
              </div>
              <div className="postcard__bar" />
              <br />
              <div className="postcard__preview-txt">
                I am a Full Stack developer I'm working with newest front-end
                frameworks like React and NextJS, and back-end like Express.
                What you are seeing now is portfolio I created and other
                projects.
                <br />
                <br /> Also I am cybersecurity engineer, passionate about IT
                security with strong knowledge and skills in IOT and IT security
                in addition to soft skills and personal motivation.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">Thank you 💜</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
