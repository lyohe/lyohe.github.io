"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{9535:function(e,t,l){var a=l(7294),i=l(5444),r=l(6125);t.Z=function(){var e,t,n=(0,i.useStaticQuery)("1445466728"),c=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(1944)}),(null==c?void 0:c.name)&&a.createElement("p",null,(null==c?void 0:c.summary)||null,a.createElement("br",null),a.createElement("a",{href:"/rss"},"RSS")," / ",a.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"Twitter")," / ",a.createElement("a",{href:"https://github.com/"+((null==s?void 0:s.github)||"")},"GitHub")," / ",a.createElement("a",{href:"https://zenn.dev/"+((null==s?void 0:s.zenn)||"")},"Zenn")))}},7704:function(e,t,l){l.r(t);var a=l(7294),i=l(5444),r=l(9535),n=l(7198),c=l(3751);t.default=function(e){var t,l=e.data,s=e.location,o=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",p=l.allMarkdownRemark.nodes;return 0===p.length?a.createElement(n.Z,{location:s,title:o},a.createElement(c.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(n.Z,{location:s,title:o},a.createElement(c.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},p.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1944:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#e8d8c8","images":{"fallback":{"src":"/static/e8fd2154b9e4024a4342869b4971332c/d24ee/profile-pic.jpg","srcSet":"/static/e8fd2154b9e4024a4342869b4971332c/d24ee/profile-pic.jpg 50w,\\n/static/e8fd2154b9e4024a4342869b4971332c/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/e8fd2154b9e4024a4342869b4971332c/d4bf4/profile-pic.avif 50w,\\n/static/e8fd2154b9e4024a4342869b4971332c/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/e8fd2154b9e4024a4342869b4971332c/3faea/profile-pic.webp 50w,\\n/static/e8fd2154b9e4024a4342869b4971332c/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-82be38207b507ce47f99.js.map