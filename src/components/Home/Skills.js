import React from "react";

import { Card, CardMedia, CardContent } from "@mui/material";
import skillData from "../../assets/data/skills-data";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="language-list">
        {skillData.map((item, index) => {
          return (
            <Card key={index}>
              <div className="card-media-container">
                <CardMedia component="img" alt={item.alt} src={item.src} />
              </div>
              <CardContent>
                <h4>{item.h4}</h4>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
