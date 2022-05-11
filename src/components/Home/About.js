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
          Hello, I am Yuya Hochi. I graduated with Mechanical Enginnering degree
          in Japan. But I decided to change my expertise to Computer Science.
          Currently, I am preparing for learning Computer Science at the
          University of Kent in the UK.
        </p>
      </div>
    </div>
  );
};

export default About;
