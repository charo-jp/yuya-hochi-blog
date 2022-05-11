import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./Charo.scss";

const Charo = () => {
  return (
    <div className="charo">
      <h2>Meet Charo!</h2>
      <StaticImage
        src="../../assets/images/charo.jpg"
        alt="charo"
        className="charo-picture"
        placeholder="blurred"
        layout="constrained"
      />
      <div className="charo-intro">
        <p>
          This is my dog Charo. She is a girl and 11 year-old pomeranian. She
          has been a part of my family for 11 years. The picture on the right is
          taken when she begged a piece of carrot (her favorite vegetable) from
          me.
        </p>
      </div>
    </div>
  );
};

export default Charo;
