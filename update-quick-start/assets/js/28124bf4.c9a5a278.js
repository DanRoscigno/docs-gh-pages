"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78040],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4837:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],o={sidebar_label:"AMPLab Big Data Benchmark",description:"A benchmark dataset used for comparing the performance of data warehousing solutions."},c="AMPLab Big Data Benchmark",l={unversionedId:"en/getting-started/example-datasets/amplab-benchmark",id:"en/getting-started/example-datasets/amplab-benchmark",title:"AMPLab Big Data Benchmark",description:"A benchmark dataset used for comparing the performance of data warehousing solutions.",source:"@site/docs/en/getting-started/example-datasets/amplab-benchmark.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/amplab-benchmark",permalink:"/docs-gh-pages/update-quick-start/en/getting-started/example-datasets/amplab-benchmark",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/amplab-benchmark.md",tags:[],version:"current",frontMatter:{sidebar_label:"AMPLab Big Data Benchmark",description:"A benchmark dataset used for comparing the performance of data warehousing solutions."},sidebar:"english",previous:{title:"New York Taxi Data",permalink:"/docs-gh-pages/update-quick-start/en/getting-started/example-datasets/nyc-taxi"},next:{title:"Brown University Benchmark",permalink:"/docs-gh-pages/update-quick-start/en/getting-started/example-datasets/brown-benchmark"}},u={},d=[],p={toc:d};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amplab-big-data-benchmark"},"AMPLab Big Data Benchmark"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://amplab.cs.berkeley.edu/benchmark/"},"https://amplab.cs.berkeley.edu/benchmark/")),(0,i.kt)("p",null,"Sign up for a free account at ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com."},"https://aws.amazon.com.")," It requires a credit card, email, and phone number. Get a new access key at ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home?nc2=h_m_sc#security_credential"},"https://console.aws.amazon.com/iam/home?nc2=h_m_sc#security_credential")),(0,i.kt)("p",null,"Run the following in the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install s3cmd\n$ mkdir tiny; cd tiny;\n$ s3cmd sync s3://big-data-benchmark/pavlo/text-deflate/tiny/ .\n$ cd ..\n$ mkdir 1node; cd 1node;\n$ s3cmd sync s3://big-data-benchmark/pavlo/text-deflate/1node/ .\n$ cd ..\n$ mkdir 5nodes; cd 5nodes;\n$ s3cmd sync s3://big-data-benchmark/pavlo/text-deflate/5nodes/ .\n$ cd ..\n")),(0,i.kt)("p",null,"Run the following ClickHouse queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE rankings_tiny\n(\n    pageURL String,\n    pageRank UInt32,\n    avgDuration UInt32\n) ENGINE = Log;\n\nCREATE TABLE uservisits_tiny\n(\n    sourceIP String,\n    destinationURL String,\n    visitDate Date,\n    adRevenue Float32,\n    UserAgent String,\n    cCode FixedString(3),\n    lCode FixedString(6),\n    searchWord String,\n    duration UInt32\n) ENGINE = MergeTree(visitDate, visitDate, 8192);\n\nCREATE TABLE rankings_1node\n(\n    pageURL String,\n    pageRank UInt32,\n    avgDuration UInt32\n) ENGINE = Log;\n\nCREATE TABLE uservisits_1node\n(\n    sourceIP String,\n    destinationURL String,\n    visitDate Date,\n    adRevenue Float32,\n    UserAgent String,\n    cCode FixedString(3),\n    lCode FixedString(6),\n    searchWord String,\n    duration UInt32\n) ENGINE = MergeTree(visitDate, visitDate, 8192);\n\nCREATE TABLE rankings_5nodes_on_single\n(\n    pageURL String,\n    pageRank UInt32,\n    avgDuration UInt32\n) ENGINE = Log;\n\nCREATE TABLE uservisits_5nodes_on_single\n(\n    sourceIP String,\n    destinationURL String,\n    visitDate Date,\n    adRevenue Float32,\n    UserAgent String,\n    cCode FixedString(3),\n    lCode FixedString(6),\n    searchWord String,\n    duration UInt32\n) ENGINE = MergeTree(visitDate, visitDate, 8192);\n")),(0,i.kt)("p",null,"Go back to the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ for i in tiny/rankings/*.deflate; do echo $i; zlib-flate -uncompress < $i | clickhouse-client --host=example-perftest01j --query="INSERT INTO rankings_tiny FORMAT CSV"; done\n$ for i in tiny/uservisits/*.deflate; do echo $i; zlib-flate -uncompress < $i | clickhouse-client --host=example-perftest01j --query="INSERT INTO uservisits_tiny FORMAT CSV"; done\n$ for i in 1node/rankings/*.deflate; do echo $i; zlib-flate -uncompress < $i | clickhouse-client --host=example-perftest01j --query="INSERT INTO rankings_1node FORMAT CSV"; done\n$ for i in 1node/uservisits/*.deflate; do echo $i; zlib-flate -uncompress < $i | clickhouse-client --host=example-perftest01j --query="INSERT INTO uservisits_1node FORMAT CSV"; done\n$ for i in 5nodes/rankings/*.deflate; do echo $i; zlib-flate -uncompress < $i | clickhouse-client --host=example-perftest01j --query="INSERT INTO rankings_5nodes_on_single FORMAT CSV"; done\n$ for i in 5nodes/uservisits/*.deflate; do echo $i; zlib-flate -uncompress < $i | clickhouse-client --host=example-perftest01j --query="INSERT INTO uservisits_5nodes_on_single FORMAT CSV"; done\n')),(0,i.kt)("p",null,"Queries for obtaining data samples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT pageURL, pageRank FROM rankings_1node WHERE pageRank > 1000\n\nSELECT substring(sourceIP, 1, 8), sum(adRevenue) FROM uservisits_1node GROUP BY substring(sourceIP, 1, 8)\n\nSELECT\n    sourceIP,\n    sum(adRevenue) AS totalRevenue,\n    avg(pageRank) AS pageRank\nFROM rankings_1node ALL INNER JOIN\n(\n    SELECT\n        sourceIP,\n        destinationURL AS pageURL,\n        adRevenue\n    FROM uservisits_1node\n    WHERE (visitDate > '1980-01-01') AND (visitDate < '1980-04-01')\n) USING pageURL\nGROUP BY sourceIP\nORDER BY totalRevenue DESC\nLIMIT 1\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting_started/example_datasets/amplab_benchmark/"},"Original article")," "))}g.isMDXComponent=!0}}]);