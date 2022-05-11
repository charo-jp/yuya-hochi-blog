const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogResults = await graphql(`
    query GetBlogTags {
      allContentfulBlog {
        nodes {
          metadata {
            tags {
              contentful_id
            }
          }
        }
      }
    }
  `);

  const portfolioResults = await graphql(`
    query GetPortfolioTags {
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
  `);

  const blogTemplate = require.resolve(
    "./src/templates/tag-template-for-blog.js"
  );
  const portfolioTemplate = require.resolve(
    "./src/templates/tag-template-for-portfolio.js"
  );

  // blog

  const allTagsForBlog = [];

  blogResults.data.allContentfulBlog.nodes.forEach((node) => {
    node.metadata.tags.forEach((contentful_id) => {
      allTagsForBlog.push(contentful_id.contentful_id);
    });
  });

  const blogTags = allTagsForBlog.filter(
    (value, index) => allTagsForBlog.indexOf(value) === index
  );

  blogTags.forEach((tag) => {
    const tagSlug = slugify(tag, { lower: true });
    createPage({
      path: `/blog/tags/${tagSlug}`,
      component: blogTemplate,
      context: { tag: tag },
    });
  });

  // portfolio
  const allTagsForPortfolio = [];

  portfolioResults.data.allContentfulPortfolio.nodes.forEach((node) => {
    node.metadata.tags.forEach((contentful_id) => {
      allTagsForPortfolio.push(contentful_id.contentful_id);
    });
  });

  const portfolioTags = allTagsForPortfolio.filter(
    (value, index) => allTagsForPortfolio.indexOf(value) === index
  );

  portfolioTags.forEach((tag) => {
    const tagSlug = slugify(tag, { lower: true });
    createPage({
      path: `/portfolio/tags/${tagSlug}`,
      component: portfolioTemplate,
      context: { tag: tag },
    });
  });
};
