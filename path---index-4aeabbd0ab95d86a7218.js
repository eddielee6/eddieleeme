webpackJsonp([0x81b8806e4260],{536:function(e,a){e.exports={data:{authors:{edges:[{node:{id:"eddie",name:"Eddie Lee",image:"/images/eddielee.jpg",url:"https://twitter.com/eddielee6",bio:"Father and Software Engineer"}}]}},pathContext:{nodes:[{node:{frontmatter:{title:"Hello Gatsby",tags:["blog","react","github","cloudflare"],cover:"https://unsplash.it/1152/300/?random?Gatsby",date:"2018-05-11T22:43",author:"eddie"},fields:{slug:"/hello-gatsby"},html:'<p>Well it’s just over a year and a half since I <a href="https://eddielee.me/hello-ghost">moved this blog from Tumblr to Ghost</a>, and I’ve moved it again. Ghost is great; I like its web based editor and its super easy to use, but it has a lot of downsides for me.</p>\n<ul>\n<li>I much prefer to write in <a href="https://eddielee.me/bear-a-beautiful-writing-app">Bear</a> than Ghost’s online editor</li>\n<li>Its a dynamic app which requires an expensive VPS to run on (I paid $5 a month from <a href="https://www.digitalocean.com/products/one-click-apps/ghost/">Digital Ocean</a>)</li>\n<li>I had to handle backups myself</li>\n<li>Updating to new versions of Ghost is a <a href="https://docs.ghost.org/v0.11/docs/how-to-upgrade-ghost">painfully manual process</a></li>\n<li>Making changes to <a href="https://github.com/eddielee6/SleepyMoon">my theme</a> involved editing handlebars files (which is no fun)</li>\n</ul>\n<p>What I wanted was a way to host the site for free (preferably with SSL), be able to easily import markdown posts from Bear, not have to worry about backups, and be able to change the sites theme with ease.</p>\n<p>Introducing <a href="https://github.com/eddielee6/SleepyMoon">Gatsby</a>, a static site generator for React. Gatsby can take in my markdown files, run them through a build process using a template written in React (much easier for me to change), and outputs static html that I can host almost anywhere. Backups are also a thing of the past as the posts are now stored in GitHub.</p>\n<p><img src="/images/gatsby-diagram.png" alt="Gatsby Diagram"></p>\n<p>Hosting the site for free was a breeze once I was dealing with static content. The site lives on GitHub pages (which is free) with CloudFlare sitting in front (for free) giving me a speed boost with their CDN, and providing free SSL.</p>\n<p>In short: Gatsby is fantastic for static site generation, using GraphQL to query markdown files makes theme development so quick and easy. Hosting static content on GitHub Pages could not be easier, and CloudFlares free plan is a total no brainer.</p>\n<p>Very happy with this setup, and with getting $5 back a month.</p>',timeToRead:2}},{node:{frontmatter:{title:"There is",tags:["music"],cover:"https://unsplash.it/1152/300/?random?sad",date:"2018-05-08T22:44",author:"eddie"},fields:{slug:"/there-is"},html:'<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/EZj2OMPWEZc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>',timeToRead:1}},{node:{frontmatter:{title:"2017 a year in review",tags:["personal","family"],cover:"https://unsplash.it/1152/300/?random?2017",date:"2017-12-31T23:07",author:"eddie"},fields:{slug:"/2017-a-year-in-review"},html:'<p>Following <a href="http://eddielee.me/its-been-a-year-a-retrospective/">last years post</a>, I\'ve decided to do another year in review, and 2017 has been one crazy year!</p>\n<p><strong>Family</strong></p>\n<p><img src="/images/2017-review-house.jpg" alt="Our house">\nThe overwhelming highlight of this year has been buying and moving into our first family home. But this wasn’t the only crazy change or achievement the year had to offer. Lauren got a new job, I got promoted, Ethan started School, Aurora started Nursery, and we got our first car.</p>\n<p><strong>Fun</strong></p>\n<p><img src="/images/2017-review-family.jpg" alt="Our family">\nWith all this it\'s surprising we had any time for fun, but along with our summer holiday and numerous trips to Thomas Land we managed quite a lot. I even managed to see a whole load of my favourite bands; Blink 182, Green Day, Weezer and Good Charlotte - all in one year.</p>\n<p><strong>Apps</strong></p>\n<p>At the end of last year Glass Umbrella committed to <a href="https://twitter.com/glassumbrellaco/status/815270013808607232">release an app in 2017</a>, well that <a href="https://twitter.com/glassumbrellaco/status/947554224103198720">didn’t happen</a>. However, I can share what I’ve been working on for the last year. Drank is your personal window into understanding the makeup of your daily fluid intake; helping you keep a healthy balance of water, caffeine and alcohol. After a bit of a tidy up and some design work, the app should ship early in 2018.  Until then there is a beta you can join via Twitter DM to <a href="https://twitter.com/thedrankapp">@thedrankapp</a>.\n<img src="/images/2017-review-app.png" alt="Drank App"></p>\n<p>Here\'s looking forward to all 2018 brings, hopefully a bit less change, a lot more relaxing and family time.</p>',timeToRead:1}},{node:{frontmatter:{title:"Reaction Match iPhone X update",tags:["Reaction Match","iOS","game"],cover:"https://unsplash.it/1152/300/?random?iPhoneX",date:"2017-12-10T09:24",author:"eddie"},fields:{slug:"/reaction-match-iphone-x-update"},html:'<p>Reaction Match version 2.2 is now out; with support for iPhone X, updated to Swift 4 and a few bug fixes for Game Centre.</p>\n<p><img src="/images/reaction-match-x.png" alt="Reaction Match on iPhone X"></p>\n<p><a href="https://itunes.apple.com/gb/app/reaction-match/id1076974103">Download on the iOS App Store now!</a></p>',timeToRead:1}},{node:{frontmatter:{title:"My podcast top 10",tags:["podcasts","media"],cover:"/images/podcast-banner.jpg",date:"2017-04-02T11:43",author:"eddie"},fields:{slug:"/my-podcast-top-10"},html:'<p>I listen to a lot of podcasts, here’s my podcast top 10.</p>\n<h3 id="1-hello-internet"><a href="#1-hello-internet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. <a href="http://www.hellointernet.fm">Hello Internet</a></h3>\n<p><a href="http://www.hellointernet.fm"><img src="/images/podcast-1-hello-internet.png" alt="Hello Internet"></a></p>\n<h3 id="2-accidental-tech-podcast"><a href="#2-accidental-tech-podcast" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. <a href="http://atp.fm">Accidental Tech Podcast</a></h3>\n<p><a href="http://atp.fm"><img src="/images/podcast-2-atp.jpg" alt="Accidental Tech Podcast"></a></p>\n<h3 id="3-the-talk-show"><a href="#3-the-talk-show" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. <a href="https://daringfireball.net/thetalkshow">The Talk Show</a></h3>\n<p><a href="https://daringfireball.net/thetalkshow"><img src="/images/podcast-3-talk-show.png" alt="The Talk Show"></a></p>\n<h3 id="4-the-incomparable"><a href="#4-the-incomparable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. <a href="https://www.theincomparable.com/theincomparable">The Incomparable</a></h3>\n<p><a href="https://www.theincomparable.com/theincomparable"><img src="/images/podcast-4-incomperable.jpg" alt="The Incomparable"></a></p>\n<h3 id="5-top-four"><a href="#5-top-four" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. <a href="https://www.relay.fm/topfour">Top Four</a></h3>\n<p><a href="https://www.relay.fm/topfour"><img src="/images/podcast-5-top-four.png" alt="Top Four"></a></p>\n<h3 id="6-reconcilable-differences"><a href="#6-reconcilable-differences" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6. <a href="https://www.relay.fm/rd">Reconcilable Differences</a></h3>\n<p><a href="https://www.relay.fm/rd"><img src="/images/podcast-6-rd.png" alt="Reconcilable Differences"></a></p>\n<h3 id="7-cortex"><a href="#7-cortex" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>7. <a href="https://www.relay.fm/cortex">Cortex</a></h3>\n<p><a href="https://www.relay.fm/cortex"><img src="/images/podcast-7-cortex.png" alt="Cortex"></a></p>\n<h3 id="8-connected"><a href="#8-connected" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>8. <a href="https://www.relay.fm/connected">Connected</a></h3>\n<p><a href="https://www.relay.fm/connected"><img src="/images/podcast-8-connected.png" alt="Connected"></a></p>\n<h3 id="9-science-vs"><a href="#9-science-vs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>9. <a href="https://gimletmedia.com/science-vs">Science Vs</a></h3>\n<p><a href="https://gimletmedia.com/science-vs"><img src="/images/podcast-9-vs.png" alt="Science Vs"></a></p>\n<h3 id="10-analogue"><a href="#10-analogue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>10. <a href="https://www.relay.fm/analogue">Analog(ue)</a></h3>\n<p><a href="https://www.relay.fm/analogue"><img src="/images/podcast-10-analogue.png" alt="Analog(ue)"></a></p>\n<h2 id="honourable-mentions"><a href="#honourable-mentions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Honourable mentions</h2>\n<p>This list was hard to put together, so heres another 10 honourable mentions.</p>\n<p><a href="https://www.relay.fm/clockwise">Clockwise</a>, <a href="https://www.relay.fm/liftoff">Liftoff</a>, <a href="https://www.theincomparable.com/teevee">TeeVee</a>, <a href="https://www.relay.fm/radar">Under the Radar</a>, <a href="https://www.relay.fm/ungeniused">Ungeniused</a>, <a href="https://www.theincomparable.com/ump">Unjustly Maligned</a>, <a href="https://www.relay.fm/bonanza">Bonanza</a>, <a href="https://www.theincomparable.com/robot">Robot or Not?</a>, <a href="https://www.relay.fm/remaster">Remaster</a> &#x26; <a href="https://www.relay.fm/upgrade">Upgrade</a>.\n<img src="/images/podcast-mentions.jpg"></p>',timeToRead:2}}],page:1,pages:9,total:41,limit:5,next:"/2"}}}});
//# sourceMappingURL=path---index-4aeabbd0ab95d86a7218.js.map