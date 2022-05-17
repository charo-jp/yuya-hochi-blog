import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Paper, Chip } from "@mui/material";

import "./AllTags.scss";
const AllTags = ({ type }) => {
  const data = useStaticQuery(query);
  const allContents =
    type === "blog"
      ? data.allContentfulBlog.nodes
      : data.allContentfulPortfolio.nodes;
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const allTags = [];

    allContents.forEach((node) => {
      node.metadata.tags.forEach((contentful_id) => {
        allTags.push(contentful_id.contentful_id);
      });
    });

    setTags(allTags.filter((value, index) => allTags.indexOf(value) === index));
  }, []);

  return (
    <div className="posts-tags-list">
      <Paper>
        {tags &&
          tags.map((tag, index) => {
            return (
              <Chip
                key={index}
                label={tag}
                component={Link}
                to={
                  type === "blog"
                    ? `/blog/tags/${tag}`
                    : `/portfolio/tags/${tag}`
                }
                clickable
                color="primary"
                size="medium"
              />
            );
          })}
      </Paper>
    </div>
  );
};

export default AllTags;

export const query = graphql`
  {
    allContentfulBlog(sort: { fields: createdAt, order: DESC }) {
      nodes {
        metadata {
          tags {
            contentful_id
          }
        }
      }
    }
    allContentfulPortfolio {
      nodes {
        metadata {
          tags {
            contentful_id
          }
        }
      }
    }
  }
`;
