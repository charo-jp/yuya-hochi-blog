import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import AllTags from "../../components/UIElements/AllTags";
import Cards from "../../components/UIElements/Cards";
import SEO from "../../components/SEO";
import "../../assets/scss/posts.scss";
export const query = graphql`
  {
    allContentfulPortfolio(sort: { order: DESC, fields: createdAt }) {
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

const Portfolio = () => {
  const data = useStaticQuery(query);
  const portfolios = data.allContentfulPortfolio.nodes;
  return (
    <div>
      <Layout>
        <SEO
          title="Portfolio"
          description="I have learning how to code by myself creating portfolios to acquire new skills. Here are some works that I have done."
          keywords="portfolio, yuya hochi"
        />
        <main className="posts">
          <div className="posts-container">
            <h1>Portfolio</h1>
            <AllTags type="portfolio" />
            <Cards articles={portfolios} content="portfolio" />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Portfolio;
