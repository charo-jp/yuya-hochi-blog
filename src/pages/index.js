import * as React from "react";
import Layout from "../components/Layout/Layout";

import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import SEO from "../components/SEO";
import Charo from "../components/Home/Charo";
import "./index.scss";
import BlogAndPortfolio from "../components/Home/BlogAndPortfolio";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Hello, I am Yuya Hochi. I write articles about programming in an understandable way. This is because it has been difficult for me to understand documentations. I explain things as clear as possible."
        keywords="Yuya Hochi, 芳地祐哉, University of Kent, Computer Science Conversion"
      />
      <main className="page">
        <About />
        <Skills />
        <BlogAndPortfolio />
        <Charo />
      </main>
    </Layout>
  );
}
