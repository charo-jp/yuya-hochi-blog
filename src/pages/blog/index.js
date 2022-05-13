import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Cards from "../../components/UIElements/Cards";
import SEO from "../../components/SEO";
import { Paper, Chip } from "@mui/material";

import "../../assets/scss/posts.scss";
export const query = graphql`
  {
    allContentfulBlog(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        createdAt
        metadata {
          tags {
            contentful_id
          }
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        id
      }
    }
  }
`;

const Blog = () => {
  const data = useStaticQuery(query);
  const blogs = data.allContentfulBlog.nodes;
  const [blogTags, setBlogTags] = useState([]);
  useEffect(() => {
    const allTagsForBlog = [];

    blogs.forEach((node) => {
      node.metadata.tags.forEach((contentful_id) => {
        allTagsForBlog.push(contentful_id.contentful_id);
      });
    });

    setBlogTags(
      allTagsForBlog.filter(
        (value, index) => allTagsForBlog.indexOf(value) === index
      )
    );
  }, []);

  return (
    <Layout>
      <SEO
        title="Blog"
        description="You can find articles mainly about Web Programming. In each post, it is clearly explained the concept that you want to learn. "
        keywords="blog, yuya hochi"
      />
      <main className="posts">
        <div className="posts-container">
          <h1>Blog</h1>
          <div className="posts-tags-list">
            <Paper>
              {blogTags &&
                blogTags.map((tag, index) => {
                  return (
                    <Chip
                      key={index}
                      label={tag}
                      component={Link}
                      to={`/blog/tags/${tag}`}
                      clickable
                      color="primary"
                      size="medium"
                    />
                  );
                })}
            </Paper>
          </div>
          <Cards articles={blogs} content="blog" />
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
