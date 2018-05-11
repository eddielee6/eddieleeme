webpackJsonp([0xfe2a1d89dca4],{587:function(e,t){e.exports={data:{allMarkdownRemark:{totalCount:1,edges:[{node:{fields:{slug:"/strip-the-www-with-nginx"},excerpt:'DNS is a pain. The internet is littered with people complaining about "naked domain" problems - where a site responds to "www.mysite.com…',timeToRead:1,frontmatter:{title:"Strip the www with nginx",tags:["ngnix","dns"],cover:"https://unsplash.it/1152/300/?random?nginx",date:"2016-08-21T18:52"}}}]},authors:{edges:[{node:{id:"eddie",name:"Eddie Lee",image:"/images/eddielee.jpg",url:"https://twitter.com/eddielee6",bio:"Father and Software Engineer"}}]}},pathContext:{tag:"ngnix",nodes:[{node:{frontmatter:{title:"Strip the www with nginx",tags:["ngnix","dns"],cover:"https://unsplash.it/1152/300/?random?nginx",date:"2016-08-21T18:52",author:"eddie"},fields:{slug:"/strip-the-www-with-nginx"},html:'<p>DNS is a pain. The internet is littered with people complaining about "naked domain" problems - where a site responds to "www.mysite.com" but not "mysite.com".</p>\n<p>But I have the opposite problem. URLs should be nice to look at - and personally, I\'m no fan of the "www." prefix. I want the address of this site to be <a href="http://eddielee.me">eddielee.me</a> not <a href="http://www.eddielee.me">www.eddielee.me</a>. However; fact is, people will type "www." and I need to handle that.</p>\n<p>Luckily this is quite easy if you\'re comfortable with DNS and changing a few lines in a config file.</p>\n<p>The first thing to do is make sure both the "naked domain" and "www" subdomain are pointing to the right server. To do this set A records for both <code class="language-text">@</code> and <code class="language-text">www</code> to point to your IP address.</p>\n<p><img src="/images/dns-naked.png" alt="Naked domain A record"></p>\n<p><img src="/images/dns-www.png" alt="www A record"></p>\n<p>Once these have propagated the site should be available at both "www.mysite.com" and "mysite.com".</p>\n<p>Now, to remove the "www." and forward the user onto the correct page on the naked domain. E.g. "www.mysite.com/section/page?param=value" to "mysite.com/section/page?param=value".</p>\n<p>To do this we need to edit the config for the nginx site; found in the directory <code class="language-text">/etc/nginx/sites-available</code>. Here an additional server section should be added as follows.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">server {\n  server_name www.mysite.com;\n  return 301 $scheme://mysite.com$request_uri;\n}</code></pre>\n      </div>\n<p>This will 301 redirect any request prefixed with "www." to the same path on the naked domain.</p>',timeToRead:1}}],page:1,pages:1,total:1,limit:5}}}});
//# sourceMappingURL=path---tags-ngnix-6f0e8314836412f3f657.js.map