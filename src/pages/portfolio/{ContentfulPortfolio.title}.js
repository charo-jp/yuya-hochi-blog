import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";
import slugify from "slugify";
import SEO from "../../components/SEO";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import getDate from "../../utils/getDate";
import getTags from "../../utils/getTags";
import Layout from "../../components/Layout/Layout";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { BsBoxArrowLeft } from "react-icons/bs";

import "../../assets/scss/post.scss";

const PortfolioTemplate = ({ data }) => {
  const { title, createdAt, image } = data.contentfulPortfolio;
  const body = data.contentfulPortfolio.article.childMdx.body;
  const tags = getTags(data.contentfulPortfolio.metadata.tags);
  const imageUrl = image.url;
  const url = `portfolio/${slugify(title, { lower: true, remove: "." })}`;
  const description = data.contentfulPortfolio.description.description;
  const pathToImage = getImage(image);
  const createdTime = getDate(createdAt);
  const keywords = tags.join(", ");
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        imageUrl={imageUrl}
        url={url}
      />
      <div className="post">
        <div className="post-article">
          <Link to="/portfolio" className="back-to-prev">
            <BsBoxArrowLeft />
          </Link>
          <div className="post-header">
            <h1 className="post-title">{title}</h1>
            <p className="post-created-at">{createdTime}</p>
            <Stack className="tag-stack" direction="row" spacing={1}>
              {tags.map((tag, index) => {
                return (
                  <Chip
                    key={index}
                    label={tag}
                    component={Link}
                    to={`/portfolio/tags/${tag}`}
                    clickable
                    color="primary"
                    size="small"
                  />
                );
              })}
            </Stack>
          </div>
          <div className="post-pic">
            <GatsbyImage image={pathToImage} alt={title} />
          </div>
          <div className="markdown">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioTemplate;

export const query = graphql`
  query getSinglePortfolio($title: String) {
    contentfulPortfolio(title: { eq: $title }) {
      id
      createdAt
      title
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        url
      }
      article {
        childMdx {
          body
        }
      }
      metadata {
        tags {
          contentful_id
        }
      }
      description {
        description
      }
    }
  }
`;
