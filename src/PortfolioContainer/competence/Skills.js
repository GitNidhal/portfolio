import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiTailwindcss,
  SiCisco,
  SiKalilinux,
  SiVirtualbox,
} from "react-icons/si";
import { BsFillBootstrapFill, BsHddNetworkFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { FcLinux } from "react-icons/fc";
import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaGitSquare,
  FaWatchmanMonitoring,
  FaRedhat,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

import Container from "react-bootstrap/esm/Container";
import "./Skills.css";

const Skills = () => {
  return (
    <Container>
      <section style={{ borderRadius: "5rem" }}>
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            Skills
          </div>
          <article className="postcard dark yellow">
            <div className="postcard__text">
              <h1 className="postcard__title yellow">Full Stack Skills</h1>
              <br />

              <div className="postcard__bar" />
              <br />
              <div className="postcard__preview-txt">
                <div
                  className="skills"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div>
                    <ImHtmlFive size="5rem" color="#FF4433" />
                    <h3 style={{ color: "#F1ECEB" }}>HTML</h3>
                  </div>
                  <div>
                    <IoLogoCss3 size="5rem" color="blue" />
                    <h3 style={{ color: "#F1ECEB" }}>CSS</h3>
                  </div>
                  <div>
                    <SiJavascript size="5rem" color="#FFc000" />
                    <h3 style={{ color: "#F1ECEB" }}>JS</h3>
                  </div>
                  <div>
                    <FaReact size="5rem" color="blue" />
                    <h3 style={{ color: "#F1ECEB" }}>REACT</h3>
                  </div>
                  <div>
                    <DiNodejs size="5rem" color="green" />
                    <h3 style={{ color: "#F1ECEB" }}>Node JS</h3>
                  </div>
                </div>
                <br />
                <div className="postcard__preview-txt">
                  <div
                    className="skills"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div>
                      <BsFillBootstrapFill size="5rem" color="#8F00FF" />
                      <h3 style={{ color: "#F1ECEB" }}>Bootstrap</h3>
                    </div>
                    <div>
                      <SiTailwindcss size="5rem" color="#60A5FA" />
                      <h3 style={{ color: "#F1ECEB" }}>TailWind</h3>
                    </div>

                    <div>
                      <FaGithub size="5rem" color="black" />
                      <h3 style={{ color: "#F1ECEB" }}>Github</h3>
                    </div>
                    <div>
                      <FaGitSquare size="5rem" color="black" />
                      <h3 style={{ color: "#F1ECEB" }}>Git</h3>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item"></li>
                <li className="tag__item"></li>
                <li className="tag__item"></li>
              </ul>
            </div>
          </article>
          <article className="postcard dark yellow">
            <div className="postcard__text">
              <h1 className="postcard__title yellow">
                . Cyber-security Skills
              </h1>
              <br />

              <div className="postcard__bar" />
              <br />
              <div className="postcard__preview-txt">
                <div
                  className="skills"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div>
                    <SiCisco size="5rem" color="#FF4433" />
                    <h3 style={{ color: "#F1ECEB" }}>Routing</h3>
                  </div>
                  <div>
                    <FaWatchmanMonitoring size="5rem" color="blue" />
                    <h3 style={{ color: "#F1ECEB" }}>Monitoring</h3>
                  </div>
                  <div>
                    <MdSecurity size="5rem" color="#FFc000" />
                    <h3 style={{ color: "#F1ECEB" }}>Security</h3>
                  </div>
                  <div>
                    <BsHddNetworkFill size="5rem" color="blue" />
                    <h3 style={{ color: "#F1ECEB" }}>Networking</h3>
                  </div>
                </div>
                <br />
                <div className="postcard__preview-txt">
                  <div
                    className="skills"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <div>
                      <FaRedhat size="5rem" />
                      <h3 style={{ color: "#F1ECEB" }}>Redhat</h3>
                    </div>
                    <div>
                      <SiKalilinux size="5rem" />
                      <h3 style={{ color: "#F1ECEB" }}>Kali-Linux</h3>
                    </div>
                    <div>
                      <SiVirtualbox size="5rem" color="#8F00FF" />
                      <h3 style={{ color: "#F1ECEB" }}>Virtualbox</h3>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item"></li>
                <li className="tag__item"></li>
                <li className="tag__item"></li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
