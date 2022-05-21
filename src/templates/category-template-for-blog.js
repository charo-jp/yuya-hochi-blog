import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout/Layout";
import BlogCategories from "../components/UIElements/BlogCategories";
import Cards from "../components/UIElements/Cards";
import { graphql } from "gatsby";
import AllTags from "../components/UIElements/AllTags";
import "../assets/scss/posts.scss";

const CategoryTemplateForBlog = ({ data, pageContext }) => {
  const blogs = data.allContentfulBlog.nodes;
  const category = pageContext.category;
  console.log(category);
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <Layout>
      <SEO
        title={`Blog Category: ${category}`}
        description={`You can see articles about ${category}`}
        keywords={`blog ${category}`}
      />
      <div className="posts">
        <div className="posts-container">
          <h1>{capitalizedCategory}</h1>
          <BlogCategories />
          <AllTags type="blog" category={category} />
          <Cards articles={blogs} content="blog" />
        </div>
      </div>
    </Layout>
  );
};

export default CategoryTemplateForBlog;

export const query = graphql`
  query getBlogsWithCategory($category: String) {
    allContentfulBlog(
      sort: { fields: createdAt, order: DESC }
      filter: { category: { eq: $category } }
    ) {
      nodes {
        title
        category
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
