import React from "react";
import SEO from "../components/SEO";

import Layout from "../components/Layout/Layout";
import Cards from "../components/UIElements/Cards";
import { graphql } from "gatsby";
import AllTags from "../components/UIElements/AllTags";
import "../assets/scss/posts.scss";

const TagTemplateForBlog = ({ data, pageContext }) => {
  const articles = data.allContentfulBlog.nodes;

  return (
    <Layout>
      <SEO
        title={`Blog Tag: ${pageContext.tag}`}
        description={`This page shows blogs related to ${pageContext.tag}`}
        keywords={`blog, ${pageContext.tag}, yuya hochi`}
      />
      <div className="posts">
        <div className="posts-container">
          <h1>Blog Tag: {pageContext.tag}</h1>
          <AllTags type="blog" />
          <Cards articles={articles} content="blog" />
        </div>
      </div>
    </Layout>
  );
};

export default TagTemplateForBlog;

export const query = graphql`
  query getBlogsWithTag($tag: String) {
    allContentfulBlog(
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $tag } } } }
      }
    ) {
      nodes {
        id
        title
        createdAt
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        metadata {
          tags {
            contentful_id
          }
        }
      }
    }
  }
`;
