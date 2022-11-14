import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import blogPic from "../../assets/images/blog.svg";
import portfolioPic from "../../assets/images/portfolio.svg";
import "./BlogAndPortfolio.scss";
import { Link } from "gatsby";

const bpdata = [
  {
    title: "Blog",
    image: blogPic,
    to: "/blog",
    content:
      "There are four categories for blog: Programming, Technology, Life and Basketball. For programming and technology, I post articles to improve my understanding. I explain as clearly as possible.",
  },
  {
    title: "Portfolio",
    image: portfolioPic,
    to: "/portfolio",
    content:
      "I have been learning to code by myself and creating portfolios to acquire new skills. Here are some works that I have done.",
  },
];

const BlogAndPortfolio = () => {
  return (
    <div className="blog-and-portfolio">
      <h2 className="home-content">Contents</h2>
      {bpdata.map((item, index) => {
        return (
          <div className="BP-container" key={index}>
            <Card>
              <CardHeader title={item.title} />
              <CardMedia component="img" image={item.image} alt={item.title} />
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  size="small"
                  variant="outlined"
                  to={item.to}
                >
                  Explore More
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default BlogAndPortfolio;
