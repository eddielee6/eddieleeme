---
title: "Strip the www with nginx"
cover: "https://unsplash.it/1152/300/?random?nginx"
date: "2016-08-21T18:52"
author: "eddie"
slug: "strip-the-www-with-nginx"
tags:
 - ngnix
 - dns
---
DNS is a pain. The internet is littered with people complaining about "naked domain" problems - where a site responds to "www.mysite.com" but not "mysite.com".

But I have the opposite problem. URLs should be nice to look at - and personally, I'm no fan of the "www." prefix. I want the address of this site to be [eddielee.me](http://eddielee.me) not [www.eddielee.me](http://www.eddielee.me). However; fact is, people will type "www." and I need to handle that.

Luckily this is quite easy if you're comfortable with DNS and changing a few lines in a config file.

The first thing to do is make sure both the "naked domain" and "www" subdomain are pointing to the right server. To do this set A records for both `@` and `www` to point to your IP address.

![Naked domain A record](/images/dns-naked.png)

![www A record](/images/dns-www.png)

Once these have propagated the site should be available at both "www.mysite.com" and "mysite.com".

Now, to remove the "www." and forward the user onto the correct page on the naked domain. E.g. "www.mysite.com/section/page?param=value" to "mysite.com/section/page?param=value".

To do this we need to edit the config for the nginx site; found in the directory `/etc/nginx/sites-available`. Here an additional server section should be added as follows.

```
server {
  server_name www.mysite.com;
  return 301 $scheme://mysite.com$request_uri;
}
``` 

This will 301 redirect any request prefixed with "www." to the same path on the naked domain.
