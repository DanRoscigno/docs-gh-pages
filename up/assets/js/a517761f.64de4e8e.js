"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43056],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19316:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={sidebar_label:"Introduction",sidebar_position:1,description:"Introduction to Handling JSON"},l="Handling JSON",c={unversionedId:"en/guides/developer/working-with-json/json-intro",id:"en/guides/developer/working-with-json/json-intro",title:"Handling JSON",description:"Introduction to Handling JSON",source:"@site/docs/en/guides/developer/working-with-json/json-intro.md",sourceDirName:"en/guides/developer/working-with-json",slug:"/en/guides/developer/working-with-json/json-intro",permalink:"/docs-gh-pages/up/en/guides/developer/working-with-json/json-intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/working-with-json/json-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,description:"Introduction to Handling JSON"},sidebar:"english",previous:{title:"Working with JSON",permalink:"/docs-gh-pages/up/en/guides/developer/working-with-json"},next:{title:"Relying on Structure",permalink:"/docs-gh-pages/up/en/guides/developer/working-with-json/json-structured"}},u={},d=[],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"handling-json"},"Handling JSON"),(0,i.kt)("p",null,"JSON has established itself as one of the most popular language-independent data interchange formats. As a \u201csemi-structured\u201d data format, it balances user readability with greater space efficiency than alternatives such as XML. Although typically used as the data format for requests and responses in web APIs, it is increasingly used for logging and general-purpose dataset distribution. "),(0,i.kt)("p",null,"ClickHouse provides several approaches for handling JSON, each with its respective pros and cons and usage. More recent versions of ClickHouse have introduced new types which allow even greater flexibility and performance for JSON storage and querying. While these developments make older techniques less applicable, they can still be useful and are documented here for comprehension and those users on older versions."),(0,i.kt)("p",null,"For example purposes, we utilize two datasets: a 1m row subset of the ",(0,i.kt)("a",{parentName:"p",href:"https://ghe.clickhouse.tech/#how-this-dataset-is-created"},"Github dataset")," and an example ",(0,i.kt)("a",{parentName:"p",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/http/documents-01.ndjson.gz"},"NGINX log")," in JSON format. The former includes nested columns, useful for example purposes. It is also deliberately sparse, which helps illustrate some challenges of JSON. The latter allows us to discuss standard techniques for JSON logs."))}f.isMDXComponent=!0}}]);