import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Cards from "../../components/UIElements/Cards";
import AllTags from "../../components/UIElements/AllTags";
import BlogCategories from "../../components/UIElements/BlogCategories";
import SEO from "../../components/SEO";

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
          <BlogCategories />
          <AllTags type="blog" />
          <Cards articles={blogs} content="blog" />
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
