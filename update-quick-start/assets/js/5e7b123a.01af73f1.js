"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63341],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={sidebar_label:"Introduction",sidebar_position:1,description:"TODO"},l="A Practical Introduction to Sparse Primary Indexes in ClickHouse",c={unversionedId:"en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro",id:"en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro",title:"A Practical Introduction to Sparse Primary Indexes in ClickHouse",description:"TODO",source:"@site/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro.md",sourceDirName:"en/guides/improving-query-performance/sparse-primary-indexes",slug:"/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro",permalink:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,description:"TODO"},sidebar:"english",previous:{title:"Sparse Primary Indexes",permalink:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/sparse-primary-indexes"},next:{title:"ClickHouse Index Design",permalink:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-design"}},u={},p=[{value:"Data Set",id:"data-set",level:2},{value:"Test Machine",id:"test-machine",level:2},{value:"A full table scan",id:"a-full-table-scan",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-practical-introduction-to-sparse-primary-indexes-in-clickhouse"},"A Practical Introduction to Sparse Primary Indexes in ClickHouse"),(0,i.kt)("p",null,"In this guide we are going to do a deep dive into ClickHouse indexing. We will illustrate and discuss in detail:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./sparse-primary-indexes-design#an-index-design-for-massive-data-scales"},"how indexing in ClickHouse is different from traditional relational database management systems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./sparse-primary-indexes-design#a-table-with-a-primary-key"},"how ClickHouse is building and using a table\u2019s sparse primary index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./sparse-primary-indexes-multiple"},"what some of the best practices are for indexing in ClickHouse"))),(0,i.kt)("p",null,"You can optionally execute all ClickHouse SQL statements and queries given in this guide by yourself on your own machine.\nFor installation of ClickHouse and getting started instructions, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/quick-start"},"Quick Start"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide is focusing on ClickHouse sparse primary indexes."),(0,i.kt)("p",{parentName:"div"},"For ClickHouse ",(0,i.kt)("a",{href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#table_engine-mergetree-data_skipping-indexes",target:"_blank"},"secondary data skipping indexes"),", see the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/skipping-indexes"},"Tutorial"),"."))),(0,i.kt)("h2",{id:"data-set"},"Data Set"),(0,i.kt)("p",null,"Throughout this guide we will use a sample anonymized web traffic data set."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will use a subset of 8.87 million rows (events) from the sample data set."),(0,i.kt)("li",{parentName:"ul"},"The uncompressed data size is 8.87 million events and about 700 MB. This compresses to 200 mb when stored in ClickHouse."),(0,i.kt)("li",{parentName:"ul"},"In our subset, each row contains three columns that indicate an internet user (",(0,i.kt)("inlineCode",{parentName:"li"},"UserID")," column) who clicked on a URL (",(0,i.kt)("inlineCode",{parentName:"li"},"URL")," column) at a specific time (",(0,i.kt)("inlineCode",{parentName:"li"},"EventTime")," column).")),(0,i.kt)("p",null,"With these three columns we can already formulate some typical web analytics queries such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"What are the top 10 most clicked urls for a specific user?\u201d'),(0,i.kt)("li",{parentName:"ul"},'"What are the top 10 users that most frequently clicked a specific URL?"'),(0,i.kt)("li",{parentName:"ul"},"\u201cWhat are the most popular times (e.g. days of the week) at which a user clicks on a specific URL?\u201d")),(0,i.kt)("h2",{id:"test-machine"},"Test Machine"),(0,i.kt)("p",null,"All runtime numbers given in this document are based on running ClickHouse 22.2.1 locally on a MacBook Pro with the Apple M1 Pro chip and 16GB of RAM."),(0,i.kt)("h2",{id:"a-full-table-scan"},"A full table scan"),(0,i.kt)("p",null,"In order to see how a query is executed over our data set without a primary key, we create a table (with a MergeTree table engine) by executing the following SQL DDL statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits_NoPrimaryKey\n(\n    `UserID` UInt32,\n    `URL` String,\n    `EventTime` DateTime\n)\nENGINE = MergeTree\nPRIMARY KEY tuple();\n")),(0,i.kt)("p",null,"Next insert a subset of the hits data set into the table with the following SQL insert statement. This uses the ",(0,i.kt)("a",{href:"https://clickhouse.com/docs/en/sql-reference/table-functions/url/",target:"_blank"},"URL table function")," in combination with ",(0,i.kt)("a",{href:"https://clickhouse.com/blog/whats-new-in-clickhouse-22-1/#schema-inference",target:"_blank"},"schema inference")," in order to load a  subset of the full dataset hosted remotely at clickhouse.com:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hits_NoPrimaryKey SELECT\n   intHash32(c11::UInt64) AS UserID,\n   c15 AS URL,\n   c5 AS EventTime\nFROM url('https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz')\nWHERE URL != '';\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Ok.\n\n0 rows in set. Elapsed: 145.993 sec. Processed 8.87 million rows, 18.40 GB (60.78 thousand rows/s., 126.06 MB/s.)\n")),(0,i.kt)("p",null,"ClickHouse client\u2019s result output shows us that the statement above inserted 8.87 million rows into the table."),(0,i.kt)("p",null,"Lastly, in order to simplify the discussions later on in this guide and to make the diagrams and results reproducible, we ",(0,i.kt)("a",{href:"https://clickhouse.com/docs/en/sql-reference/statements/optimize/",target:"_blank"},"optimize")," the table using the FINAL keyword:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE hits_NoPrimaryKey FINAL;\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In general it is not required nor recommended to immediately optimize a table\nafter loading data into it. Why this is necessary for this example will become apparent."))),(0,i.kt)("p",null,"Now we execute our first web analytics query. The following is calculating the top 10 most clicked urls for the internet user with the UserID 749927693:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT URL, count(URL) as Count\nFROM hits_NoPrimaryKey\nWHERE UserID = 749927693\nGROUP BY URL\nORDER BY Count DESC\nLIMIT 10;\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500URL\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500Count\u2500\u2510\n\u2502 http://auto.ru/chatay-barana.. \u2502   170 \u2502\n\u2502 http://auto.ru/chatay-id=371...\u2502    52 \u2502\n\u2502 http://public_search           \u2502    45 \u2502\n\u2502 http://kovrik-medvedevushku-...\u2502    36 \u2502\n\u2502 http://forumal                 \u2502    33 \u2502\n\u2502 http://korablitz.ru/L_1OFFER...\u2502    14 \u2502\n\u2502 http://auto.ru/chatay-id=371...\u2502    14 \u2502\n\u2502 http://auto.ru/chatay-john-D...\u2502    13 \u2502\n\u2502 http://auto.ru/chatay-john-D...\u2502    10 \u2502\n\u2502 http://wot/html?page/23600_m...\u2502     9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.022 sec.\n// highlight-next-line\nProcessed 8.87 million rows,\n70.45 MB (398.53 million rows/s., 3.17 GB/s.)\n")),(0,i.kt)("p",null,"ClickHouse client\u2019s result output indicates that ClickHouse executed a full table scan! Each single row of the 8.87 million rows of our table was streamed into ClickHouse. That doesn\u2019t scale."),(0,i.kt)("p",null,"To make this (way) more efficient and (much) faster, we need to use a table with a appropriate primary key. This will allow ClickHouse to automatically (based on the primary key\u2019s column(s)) create a sparse primary index which can then be used to significantly speed up the execution of our example query."))}d.isMDXComponent=!0}}]);