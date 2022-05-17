import React from "react";

import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords = "",
  imageUrl = "",
  url = "",
}) => {
  const siteUrl = "https://yuyahochi.com/" + url;
  return (
    <Helmet
      meta={[
        { siteUrl: "https://yuyahochi.com/" },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: "@CharoYuya" },
        { name: "twitter:site", content: "@CharoYuya" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { property: "og:url", content: siteUrl },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: imageUrl },
      ]}
      htmlAttributes={{ lang: "en" }}
      title={`${title} | Yuya Hochi`}
      link={[
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
        },
        {
          rel: "canonical",
          href: "https://yuyahochi.com/",
        },
      ]}
    />
  );
};

export default SEO;
