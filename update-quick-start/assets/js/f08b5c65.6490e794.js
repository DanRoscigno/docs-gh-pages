"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[56814],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),g=a,m=f["".concat(s,".").concat(g)]||f[g]||p[g]||c;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],i={sidebar_position:103},s="anyHeavy",u={unversionedId:"en/sql-reference/aggregate-functions/reference/anyheavy",id:"en/sql-reference/aggregate-functions/reference/anyheavy",title:"anyHeavy",description:"Selects a frequently occurring value using the heavy hitters algorithm. If there is a value that occurs more than in half the cases in each of the query\u2019s execution threads, this value is returned. Normally, the result is nondeterministic.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/anyheavy.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/anyheavy",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/anyheavy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/anyheavy.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{sidebar_position:103},sidebar:"english",previous:{title:"covarSamp",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/covarsamp"},next:{title:"anylast",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/aggregate-functions/reference/anylast"}},l={},p=[],f={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"anyheavy"},"anyHeavy"),(0,c.kt)("p",null,"Selects a frequently occurring value using the ",(0,c.kt)("a",{parentName:"p",href:"http://www.cs.umd.edu/~samir/498/karp.pdf"},"heavy hitters")," algorithm. If there is a value that occurs more than in half the cases in each of the query\u2019s execution threads, this value is returned. Normally, the result is nondeterministic."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"anyHeavy(column)\n")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Arguments")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"column")," \u2013 The column name.")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Example")),(0,c.kt)("p",null,"Take the ",(0,c.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/getting-started/example-datasets/ontime"},"OnTime")," data set and select any frequently occurring value in the ",(0,c.kt)("inlineCode",{parentName:"p"},"AirlineID")," column."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT anyHeavy(AirlineID) AS res\nFROM ontime\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500res\u2500\u2510\n\u2502 19690 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);