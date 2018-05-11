/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Mobile Meta */}
          <meta name="HandheldFriendly" content="True" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Styles'n'Scripts */}
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Merriweather:300,700,700italic,300italic|Open+Sans:700,400"
          />

          {this.props.headComponents}
          <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
          <link rel="manifest" href="/fav/site.webmanifest" />
          <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#ba3a34" />
          <link rel="shortcut icon" href="/fav/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/fav/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
