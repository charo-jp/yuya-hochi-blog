import * as React from "react"
import Layout from "../components/Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";

import "./404.scss";
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="page">
        <div className="NotFound">
          <h1>The page you are looking for does not exist</h1>
          <StaticImage
            className="page-not-found"
            src="../assets/images/pageNotFound.jpg"
            alt="page not found"
            placeholder="blurred"
            layout="constrained"
            />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
