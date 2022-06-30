import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import { Paper, Chip } from "@mui/material";

import "./AllTags.scss";
const AllTags = ({ type, category = "", handleClickedTag = () => {} }) => {
  const data = useStaticQuery(query);
  let allContents =
    type === "blog"
      ? data.allContentfulBlog.nodes
      : data.allContentfulPortfolio.nodes;

  const [tags, setTags] = useState([]);

  let url = type === "blog" ? "/blog/tags/" : "/portfolio/tags/";
  console.log(url);
  useEffect(() => {
    const allTags = [];
    allContents.forEach((node) => {
      if (type === "blog" && category) {
        if (node.category === category) {
          node.metadata.tags.forEach((contentful_id) => {
            allTags.push(contentful_id.contentful_id);
          });
        }
      } else {
        node.metadata.tags.forEach((contentful_id) => {
          allTags.push(contentful_id.contentful_id);
        });
      }
    });

    setTags(allTags.filter((value, index) => allTags.indexOf(value) === index));
  }, []);

  return (
    <div className="posts-tags-list">
      <h2>Tags</h2>
      <Paper>
        {tags &&
          tags.map((tag, index) => {
            return (
              <Chip
                key={index}
                label={tag}
                component={"a"}
                clickable
                onClick={
                  !!category
                    ? () => handleClickedTag(tag)
                    : () => {
                        navigate(url + tag);
                      }
                }
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
        category
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
