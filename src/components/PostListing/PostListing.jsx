import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import SiteConfig from "../../../data/SiteConfig";
import PostFormatting from "../../layouts/PostFormatting/PostFormatting";
import PostHeader from "../../layouts/PostHeader/PostHeader";
import AuthorModel from "../../models/author-model";
import "./PostListing.css";

const getPostList = (postEdges, authorEdges) =>
  postEdges.map(postEdge => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.frontmatter.date,
    author: AuthorModel.getAuthor(
      authorEdges,
      postEdge.node.frontmatter.author,
      SiteConfig.blogAuthorId
    ),
    html: postEdge.node.html,
    timeToRead: postEdge.node.timeToRead
  }));

class PostListing extends React.Component {
  render() {
    const postList = getPostList(this.props.postEdges, this.props.postAuthors);

    return (
      <div>
        {/* This is the post loop - each post will be output using this markup */}
        {postList.map(post => {
          const { title, path, date } = post;
          const className = post.post_class ? post.post_class : "post";

          return (
            <PostFormatting className={className} key={title}>
              <PostHeader>
                <h2 className="post-title">
                  <Link to={path}>{title}</Link>
                </h2>
              </PostHeader>
              <section
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <footer className="post-meta">
                <Link to={path}>
                  <time
                    className="inline-post-date"
                    dateTime={moment(new Date(date)).format("YYYY-MM-DD")}
                  >
                    {moment(new Date(date)).format("DD MMMM YYYY")}
                  </time>
                </Link>
              </footer>
            </PostFormatting>
          );
        })}
      </div>
    );
  }
}

export default PostListing;
