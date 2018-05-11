webpackJsonp([24461200302109],{516:function(e,a){e.exports={data:{authors:{edges:[{node:{id:"eddie",name:"Eddie Lee",image:"/images/eddielee.jpg",url:"https://twitter.com/eddielee6",bio:"Father and Software Engineer"}}]}},pathContext:{nodes:[{node:{frontmatter:{title:"Strip the www with nginx",tags:["ngnix","dns"],cover:"https://unsplash.it/1152/300/?random?nginx",date:"2016-08-21T18:52",author:"eddie"},fields:{slug:"/strip-the-www-with-nginx"},html:'<p>DNS is a pain. The internet is littered with people complaining about "naked domain" problems - where a site responds to "www.mysite.com" but not "mysite.com".</p>\n<p>But I have the opposite problem. URLs should be nice to look at - and personally, I\'m no fan of the "www." prefix. I want the address of this site to be <a href="http://eddielee.me">eddielee.me</a> not <a href="http://www.eddielee.me">www.eddielee.me</a>. However; fact is, people will type "www." and I need to handle that.</p>\n<p>Luckily this is quite easy if you\'re comfortable with DNS and changing a few lines in a config file.</p>\n<p>The first thing to do is make sure both the "naked domain" and "www" subdomain are pointing to the right server. To do this set A records for both <code class="language-text">@</code> and <code class="language-text">www</code> to point to your IP address.</p>\n<p><img src="/images/dns-naked.png" alt="Naked domain A record"></p>\n<p><img src="/images/dns-www.png" alt="www A record"></p>\n<p>Once these have propagated the site should be available at both "www.mysite.com" and "mysite.com".</p>\n<p>Now, to remove the "www." and forward the user onto the correct page on the naked domain. E.g. "www.mysite.com/section/page?param=value" to "mysite.com/section/page?param=value".</p>\n<p>To do this we need to edit the config for the nginx site; found in the directory <code class="language-text">/etc/nginx/sites-available</code>. Here an additional server section should be added as follows.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">server {\n  server_name www.mysite.com;\n  return 301 $scheme://mysite.com$request_uri;\n}</code></pre>\n      </div>\n<p>This will 301 redirect any request prefixed with "www." to the same path on the naked domain.</p>',timeToRead:1}},{node:{frontmatter:{title:"Hello Ghost",tags:["blog"],cover:"https://unsplash.it/1152/300/?random?HelloGhost",date:"2016-08-21",author:"eddie"},fields:{slug:"/hello-ghost"},html:'<p>I\'ve spent the weekend migrating my blog from its old home on <a href="http://tumblr.com">Tumblr</a> to a self-hosted version of <a href="https://ghost.org/developers">Ghost</a> on <a href="https://m.do.co/c/338b102147a6">Digital Ocean</a>. While the $5/month for a Digital Ocean server is more than a free Tumblr account, the advantages are worth it.</p>\n<ul>\n<li>I have full control over the site</li>\n<li>I can easily customise all aspects of the design</li>\n<li>I own the content </li>\n<li><a href="http://www.zdnet.com/article/yahoo-reports-another-big-loss-and-tumblr-write-down/">I have no fear of Yahoo shutting me down</a></li>\n<li>No one is injecting ads</li>\n</ul>\n<p>Plus, it\'s been a great opportunity to brush up on my Linux skills.</p>',timeToRead:1}},{node:{frontmatter:{title:"Introducing Reaction Match 2",tags:["A Year of Apps","Reaction Match","Game","iOS"],cover:"https://unsplash.it/1152/300/?random?Reactions",date:"2016-05-24T21:54",author:"eddie"},fields:{slug:"/introducing-reaction-match-2"},html:'<p>For version 2, Reaction Match has been completely redesigned to be more fun than ever. Featuring new game modes, new shapes, new colours, a new design, and new leaderboards - there’s a lot to enjoy.</p>\n<p><img src="/images/year-of-apps-reaction-match-2-screenshot.png" alt="Reaction Match 2 - Screenshot"></p>\n<p><em>Can you master the new mode and top the leaderboard?</em></p>\n<p><img src="/images/year-of-apps-reaction-match-2-promo.png" alt="Man playing Reaction Match 2"></p>\n<p>The fantastic new icon was designed by <a href="http://paulwallas.com">Paul Wallas</a>.</p>\n<p><img src="/images/year-of-apps-reaction-match-2-icon.png" alt="Reaction Match 2 Icon"></p>\n<p><a href="https://itunes.apple.com/gb/app/reaction-match/id1076974103">Reaction Match 2</a> is available for free on the iOS App Store for iPhone, iPad, and iPod Touch.</p>\n<p><a href="https://itunes.apple.com/gb/app/reaction-match/id1076974103"><img src="/images/download-app-store.png" alt="Download on the App Store"></a></p>',timeToRead:1}},{node:{frontmatter:{title:"Presenting Carpark Space Finder",tags:["A Year of Apps","Carpark Space Finder"],cover:"https://unsplash.it/1152/300/?random?Carpark",date:"2016-05-03T20:19",author:"eddie"},fields:{slug:"/presenting-carpark-space-finder"},html:'<p>Over the bank holiday weekend I put together a web app - <a href="http://carpark-space-finder.herokuapp.com">Carpark Space Finder</a>.</p>\n<p>Using Nottingham’s Open Data APIs, the app shows many many spaces the carpark has and how many are free.</p>\n<p>The app is available <a href="http://carpark-space-finder.herokuapp.com">here</a>, and the source can be found on <a href="https://github.com/eddielee6/CarparkSpaceFinder">GitHub</a>.</p>\n<p><img src="/images/carpark-space-finder-home.png" alt="Carpark Space Finder Home"></p>\n<p><img src="/images/carpark-space-finder-view.png" alt="Carpark Space Finder View"></p>',timeToRead:1}},{node:{frontmatter:{title:"Presenting Reaction Match",tags:["A Year of Apps","Reaction Match"],cover:"https://unsplash.it/1152/300/?random?Release",date:"2016-02-03T16:59",author:"eddie"},fields:{slug:"/presenting-reaction-match"},html:"<p>Reaction Match is now available to download on the iOS App Store <a href=\"https://itunes.apple.com/gb/app/reaction-match/id1076974103\">https://itunes.apple.com/gb/app/reaction-match/id1076974103</a>.</p>\n<p>This is the first app in my Year of Apps challenge. It's a simple shape / colour matching game where the faster your reactions the better your score.</p>\n<p>It's free, so why not download it now and test your reactions.</p>",timeToRead:1}}],page:4,pages:9,total:41,limit:5,prev:"/3",next:"/5"}}}});
//# sourceMappingURL=path---4-5ad825d042d8fd13c15a.js.map