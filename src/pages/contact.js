import React from "react";
import { Card, CardMedia, CardActionArea, CardHeader } from "@mui/material";
import Layout from "../components/Layout/Layout";

import SEO from "../components/SEO";
import "./contact.scss";

import socialMediaData from "../assets/data/socialMediaData";

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="You can contact me through these media. Instagram is the one I used the most. Please contact me with Instagram if you want a reply as fast as possible."
      />
      <div className="page">
        <div className="contact">
          <h1>Contact</h1>
          <div className="contact-links">
            {socialMediaData.map((item, index) => {
              return (
                <Card key={index}>
                  <CardActionArea href={item.alt === "Gmail" ? "" : item.href} target="_blank">
                    <CardHeader title={item.alt} subheader={item.alt === "Gmail" ? "yuyahochi4blog@gmail.com" : ""} />
                    <CardMedia component="img" src={item.image} alt={item.alt} />
                  </CardActionArea>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
