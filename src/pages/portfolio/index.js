import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Paper, Chip } from "@mui/material";
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
  const [portfolioTags, setPortfolioTags] = useState([]);
  useEffect(() => {
    const allTagsForPortfolio = [];

    portfolios.forEach((node) => {
      node.metadata.tags.forEach((contentful_id) => {
        allTagsForPortfolio.push(contentful_id.contentful_id);
      });
    });

    setPortfolioTags(
      allTagsForPortfolio.filter(
        (value, index) => allTagsForPortfolio.indexOf(value) === index
      )
    );
  }, []);
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
            <h2>Portfolio</h2>
            <div className="posts-tags-list">
              <Paper>
                {portfolioTags &&
                  portfolioTags.map((tag, index) => {
                    return (
                      <Chip
                        key={index}
                        label={tag}
                        component={Link}
                        to={`/portfolio/tags/${tag}`}
                        clickable
                        color="primary"
                        size="medium"
                      />
                    );
                  })}
              </Paper>
            </div>
            <Cards articles={portfolios} content="portfolio" />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Portfolio;
