import React from "react";
import Navigat from "../nav/Navigat";
import "./Home.css";
import Profile from "./Profile/Profile";

export default function Home() {
  return (
    <div className="home-container">
      {/* <Navigat /> */}
      <Profile />
    </div>
  );
}
