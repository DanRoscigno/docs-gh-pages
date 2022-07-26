"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35677],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(n),f=a,h=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21072:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={},s="Meilisearch",o={unversionedId:"en/sql-reference/table-functions/meilisearch",id:"en/sql-reference/table-functions/meilisearch",title:"Meilisearch",description:"Meilisearch is a table engine and a table function to access data which lies in meilisearch.  Meilisearch is an open-source search engine providing typo-tolerance, filters, synonyms, etc.",source:"@site/docs/en/sql-reference/table-functions/meilisearch.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/meilisearch",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/meilisearch",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/meilisearch.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"sqlite",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/sqlite"},next:{title:"Dictionaries",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/dictionaries/"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"meilisearch"},"Meilisearch"),(0,i.kt)("p",null,"Meilisearch is a table engine and a table function to access data which lies in ",(0,i.kt)("a",{parentName:"p",href:"https://www.meilisearch.com/"},"meilisearch"),".  Meilisearch is an open-source search engine providing typo-tolerance, filters, synonyms, etc."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Follow the Meilisearch quick start and load the movies table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://docs.meilisearch.com/movies.json\n")),(0,i.kt)("p",{parentName:"li"},"Response"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n  -X POST 'http://localhost:7700/indexes/movies/documents' \\\n  -H 'Content-Type: application/json' \\\n  --data-binary @movies.json\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a view in ClickHouse that is associated with Meilisearch movies table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE\nmovies_table(id String, title String, release_date Int64)\nENGINE = MeiliSearch('http://localhost:7700', 'movies', '')\n")),(0,i.kt)("p",{parentName:"li"},"Response:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"CREATE TABLE movies_table\n(\n    `id` String,\n    `title` String,\n    `release_date` Int64\n)\nENGINE = MeiliSearch('http://localhost:7700', 'movies', '')\n\nQuery id: 240294db-489a-495a-9dc4-21dcacd929a8\n\nOk.\n\n0 rows in set. Elapsed: 0.011 sec.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify, still from ClickHouse: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT() FROM movies_table\n")),(0,i.kt)("p",{parentName:"li"},"Response"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"19546\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Search Meilisearch from ClickHouse"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM movies_table\nWHERE meiliMatch(\\\'"q"="abaca"\\\')\n')))))}f.isMDXComponent=!0}}]);