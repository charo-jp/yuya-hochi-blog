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
      htmlAttributes={{ lang: "en" }}
      title={`${title} | Yuya Hochi`}
      meta={[
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "twitter:card", value: "summary_large_image" },
        { name: "twitter:creator", value: "@CharoYuya" },
        { name: "twitter:site", value: "@CharoYuya" },
        { name: "twitter:title", value: title },
        { name: "twitter:description", value: description },
        { property: "og:url", content: siteUrl },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: imageUrl },
      ]}
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
