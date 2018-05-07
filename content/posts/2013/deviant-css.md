---
title: "We Give a F*** How the Site Loads"
cover: "https://unsplash.it/1152/300/?random?FuckCss"
date: "2013-08-13T22:57"
author: "eddie"
slug: "we-give-a-f-how-the-site-loads"
tags:
 - code
 - quote post
---
Looks like some people have been having difficulty with deviantART recently. The site has been loading, but not the CSS.

What was the issue? Well here's the bug report...

> I just wanted to let you know that the reason why deviantART's CSS isn't loading properly for some people is because one of your CSS files has f&#42;&#42;&#42; in a stylesheet comment.

Yes, a comment in the CSS that included the word "fuck" was being picked up by over overzealous filtering systems, resulting in the file being blocked, and not loaded.

What was the fix? Well besides removing the comment from the file, deviantART have now moved to use [LESS](http://lesscss.org), a CSS preprocessor.

This isn't a blog post to talk about the benefits of CSS preprocessors, but as deviantART inform us they cannot stop their developers from swearing in comments, this should stop these developer comments from appearing in served css files again.

<small>Source [deviantART](http://dt.deviantart.com/journal/We-Give-a-F-How-the-Site-Loads-392679726)</small>
