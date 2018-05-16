---
title: "Hello Gatsby"
cover: "https://unsplash.it/1152/300/?random?Gatsby"
date: "2018-05-11T22:43"
author: "eddie"
slug: "hello-gatsby"
tags:
 - blog
 - react
 - github
 - cloudflare
---
Well it’s just over a year and a half since I [moved this blog from Tumblr to Ghost](https://eddielee.me/hello-ghost), and I’ve moved it again. Ghost is great; I like its web based editor and its super easy to use, but it has a lot of downsides for me.

* I much prefer to write in [Bear](https://eddielee.me/bear-a-beautiful-writing-app) than Ghost’s online editor
* Its a dynamic app which requires an expensive VPS to run on (I paid $5 a month from [Digital Ocean](https://www.digitalocean.com/products/one-click-apps/ghost/))
* I had to handle backups myself
* Updating to new versions of Ghost is a [painfully manual process](https://docs.ghost.org/v0.11/docs/how-to-upgrade-ghost)
* Making changes to [my theme](https://github.com/eddielee6/SleepyMoon) involved editing handlebars files (which is no fun)

What I wanted was a way to host the site for free (preferably with SSL), be able to easily import markdown posts from Bear, not have to worry about backups, and be able to change the sites theme with ease.

Introducing [Gatsby](https://www.gatsbyjs.org), a static site generator for React. Gatsby can take in my markdown files, run them through a build process using a template written in React (much easier for me to change), and outputs static html that I can host almost anywhere. Backups are also a thing of the past as the posts are now stored in GitHub.

![Gatsby Diagram](/images/gatsby-diagram.png)
 
Hosting the site for free was a breeze once I was dealing with static content. The site lives on GitHub pages (which is free) with CloudFlare sitting in front (for free) giving me a speed boost with their CDN, and providing free SSL.

In short: Gatsby is fantastic for static site generation, using GraphQL to query markdown files makes theme development so quick and easy. Hosting static content on GitHub Pages could not be easier, and CloudFlares free plan is a total no brainer.

Very happy with this setup, and with getting $5 back a month.
