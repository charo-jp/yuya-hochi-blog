import React from "react";
import { Card, CardMedia, CardActionArea, CardHeader } from "@mui/material";
import Layout from "../components/Layout/Layout";

// add icons here
import linkedin from "../assets/images/icons8-linkedin-circled.svg";
import email from "../assets/images/icons8-mail.svg";
import SEO from "../components/SEO";
import "./contact.scss";

const socialMediaData = [
  {
    image: linkedin,
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/yuya-hochi-my-profile/",
  },
  {
    image: email,
    alt: "Gmail",
    href: "yuyahochi4blog@gmail.com",
  },
];

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
            <div className="social-media">
              {socialMediaData.map((item, index) => {
                return (
                  <Card key={index}>
                    <CardActionArea
                      href={item.alt === "Gmail" ? "" : item.href}
                      target="_blank"
                    >
                      <CardHeader
                        title={item.alt}
                        subheader={
                          item.alt === "Gmail" ? "yuyahochi4blog@gmail.com" : ""
                        }
                      />
                      <CardMedia
                        component="img"
                        src={item.image}
                        alt={item.alt}
                      />
                    </CardActionArea>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
