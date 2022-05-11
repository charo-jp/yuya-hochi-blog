import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import Cards from "../components/UIElements/Cards";
import { graphql } from "gatsby";
import "../assets/scss/post.scss";

const TagTemplateForPortfolio = ({ data, pageContext }) => {
  const articles = data.allContentfulPortfolio.nodes;

  return (
    <Layout>
      <SEO
        title={`Portfolio Tag: ${pageContext.tag}`}
        description={`This page shows portfolios related to ${pageContext.tag}`}
        keywords={`portfolio, ${pageContext.tag}, yuya hochi`}
      />
      <div className="posts">
        <div className="posts-container">
          <h2>Portfolio Tag: {pageContext.tag}</h2>
          <Cards articles={articles} content="portfolio" />
        </div>
      </div>
    </Layout>
  );
};

export default TagTemplateForPortfolio;

export const query = graphql`
  query getPortfoliosWithTag($tag: String) {
    allContentfulPortfolio(
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
