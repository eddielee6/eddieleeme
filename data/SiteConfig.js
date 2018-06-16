module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "eddie", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Eddie Lee", // Site title.
  siteTitleAlt: "Eddie Lee's Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://eddielee.me", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "Thoughts, stories, and ideas.", // Website description used for RSS feeds/meta description tag.
  siteCover: "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: false, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Eddie Lee", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 5, // The max number of posts per page.
  googleAnalyticsID: "UA-82839889-1", // GA tracking ID.
  siteSocialUrls: [
    "/",   
    "https://github.com/eddielee6",
    "https://twitter.com/eddielee6",
    "https://www.linkedin.com/in/eddielee6"
  ],
  copyright: {
    label: "Eddie Lee"
  },
  themeColor: "#ba3a34", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff", // Used for setting manifest background color.
  promoteGatsby: false
};
