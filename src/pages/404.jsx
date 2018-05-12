import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import config from "../../data/SiteConfig";
import "./404.css";

export default () => (
  <div>
    <Helmet title={`404 | ${config.siteTitle}`} />
    <div className="error-container">
      <div className="error-content">
        <h1>Page Not Found</h1>
        <Link to="/">Back to site</Link>
      </div>
    </div>
  </div>
);
