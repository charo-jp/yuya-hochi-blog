import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./About.scss";

const About = () => {
  return (
    <div className="aboutme">
      <h2>About me</h2>
      <StaticImage
        src="../../assets/images/ocean.jpg"
        alt="ocean"
        className="my-picture"
        placeholder="blurred"
        layout="constrained"
      />

      <div className="self-intro">
        <p>
        Hi, I am Yuya Hochi. I am a postgraduate student studying Computer Science
        at the University of Kent. I changed my expertise from mechanical engineering
        to computer science. I have been enjoying learning computer science and 
        building projects.
        </p>
      </div>
    </div>
  );
};

export default About;
