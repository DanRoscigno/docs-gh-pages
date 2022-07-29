"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[64538],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={sidebar_label:"Ordering key columns efficiently",sidebar_position:4,description:"TODO"},l="Ordering key columns efficiently",c={unversionedId:"en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-cardinality",id:"en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-cardinality",title:"Ordering key columns efficiently",description:"TODO",source:"@site/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-cardinality.md",sourceDirName:"en/guides/improving-query-performance/sparse-primary-indexes",slug:"/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-cardinality",permalink:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-cardinality",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-cardinality.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Ordering key columns efficiently",sidebar_position:4,description:"TODO"},sidebar:"english",previous:{title:"Using multiple primary indexes",permalink:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-multiple"},next:{title:"Identifying single rows efficiently",permalink:"/docs-gh-pages/update-quick-start/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-uuids"}},p={},d=[{value:"Efficient filtering on secondary key columns",id:"efficient-filtering-on-secondary-key-columns",level:2},{value:"Optimal compression ratio of data files",id:"optimal-compression-ratio-of-data-files",level:2},{value:"Summary",id:"summary",level:2}],u={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ordering-key-columns-efficiently"},"Ordering key columns efficiently"),(0,i.kt)("a",{name:"test"}),(0,i.kt)("p",null,"In a compound primary key the order of the key columns can significantly influence both:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the efficiency of the filtering on secondary key columns in queries, and"),(0,i.kt)("li",{parentName:"ul"},"the compression ratio for the table's data files.")),(0,i.kt)("p",null,"In order to demonstrate that, we will use a version of our ",(0,i.kt)("a",{parentName:"p",href:"./sparse-primary-indexes-intro#data-set"},"web traffic sample data set"),"\nwhere each row contains three columns that indicate whether or not the access by an internet 'user' (",(0,i.kt)("inlineCode",{parentName:"p"},"UserID")," column) to a URL (",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," column) got marked as bot traffic (",(0,i.kt)("inlineCode",{parentName:"p"},"IsRobot")," column)."),(0,i.kt)("p",null,"We will use a compound primary key containing all three aforementioned columns that could be used to speed up typical web analytics queries that calculate "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"how much (percentage of) traffic to a specific URL is from bots or"),(0,i.kt)("li",{parentName:"ul"},"how confident we are that a specific user is (not) a bot (what percentage of traffic from that user is (not) assumed to be bot traffic)")),(0,i.kt)("p",null,"We use this query for calculating the cardinalities of the three columns that we want to use as key columns in a compound primary key (note that we are using the ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/url/"},"URL table function")," for querying TSV data ad-hocly without having to create a local table). Run this query in ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse client"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    formatReadableQuantity(uniq(URL)) AS cardinality_URL,\n    formatReadableQuantity(uniq(UserID)) AS cardinality_UserID,\n    formatReadableQuantity(uniq(IsRobot)) AS cardinality_IsRobot\nFROM\n(\n    SELECT\n        c11::UInt64 AS UserID,\n        c15::String AS URL,\n        c20::UInt8 AS IsRobot\n    FROM url('https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz')\n    WHERE URL != ''\n)\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500cardinality_URL\u2500\u252c\u2500cardinality_UserID\u2500\u252c\u2500cardinality_IsRobot\u2500\u2510\n\u2502 2.39 million    \u2502 119.08 thousand    \u2502 4.00                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 118.334 sec. Processed 8.87 million rows, 15.88 GB (74.99 thousand rows/s., 134.21 MB/s.)\n")),(0,i.kt)("p",null,"We can see that there is a big difference between the cardinalities, especially between the ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IsRobot")," columns, and therefore the order of these columns in a compound primary key is significant for both the efficient speed up of queries filtering on that columns and for achieving optimal compression ratios for the table's column data files."),(0,i.kt)("p",null,"In order to demonstrate that we are creating two table versions for our bot traffic analysis data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a table ",(0,i.kt)("inlineCode",{parentName:"li"},"hits_URL_UserID_IsRobot")," with the compound primary key ",(0,i.kt)("inlineCode",{parentName:"li"},"(URL, UserID, IsRobot)")," where we order the key columns by cardinality in descending order "),(0,i.kt)("li",{parentName:"ul"},"a table ",(0,i.kt)("inlineCode",{parentName:"li"},"hits_IsRobot_UserID_URL")," with the compound primary key ",(0,i.kt)("inlineCode",{parentName:"li"},"(IsRobot, UserID, URL)")," where we order the key columns by cardinality in ascending order ")),(0,i.kt)("p",null,"Create the table ",(0,i.kt)("inlineCode",{parentName:"p"},"hits_URL_UserID_IsRobot")," with the compound primary key ",(0,i.kt)("inlineCode",{parentName:"p"},"(URL, UserID, IsRobot)"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits_URL_UserID_IsRobot\n(\n    `UserID` UInt32,\n    `URL` String,\n    `IsRobot` UInt8\n)\nENGINE = MergeTree\n// highlight-next-line\nPRIMARY KEY (URL, UserID, IsRobot);\n")),(0,i.kt)("p",null,"And populate it with 8.87 million rows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hits_URL_UserID_IsRobot SELECT\n    intHash32(c11::UInt64) AS UserID,\n    c15 AS URL,\n    c20 AS IsRobot\nFROM url('https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz')\nWHERE URL != '';\n")),(0,i.kt)("p",null,"This is the response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"0 rows in set. Elapsed: 104.729 sec. Processed 8.87 million rows, 15.88 GB (84.73 thousand rows/s., 151.64 MB/s.)\n")),(0,i.kt)("p",null,"Next, create the table ",(0,i.kt)("inlineCode",{parentName:"p"},"hits_IsRobot_UserID_URL")," with the compound primary key ",(0,i.kt)("inlineCode",{parentName:"p"},"(IsRobot, UserID, URL)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits_IsRobot_UserID_URL\n(\n    `UserID` UInt32,\n    `URL` String,\n    `IsRobot` UInt8\n)\nENGINE = MergeTree\n// highlight-next-line\nPRIMARY KEY (IsRobot, UserID, URL);\n")),(0,i.kt)("p",null,"And populate it with the same 8.87 million rows that we used to populate the previous table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hits_IsRobot_UserID_URL SELECT\n    intHash32(c11::UInt64) AS UserID,\n    c15 AS URL,\n    c20 AS IsRobot\nFROM url('https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz')\nWHERE URL != '';\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"0 rows in set. Elapsed: 95.959 sec. Processed 8.87 million rows, 15.88 GB (92.48 thousand rows/s., 165.50 MB/s.)\n")),(0,i.kt)("h2",{id:"efficient-filtering-on-secondary-key-columns"},"Efficient filtering on secondary key columns"),(0,i.kt)("p",null,"When a query is filtering on at least one column that is part of a compound key, and is the first key column, ",(0,i.kt)("a",{parentName:"p",href:"./sparse-primary-indexes-design#the-primary-index-is-used-for-selecting-granules"},"then ClickHouse is running the binary search algorithm over the key column's index marks"),"."),(0,i.kt)("p",null,"When a query is filtering (only) on a column that is part of a compound key, but is not the first key column, ",(0,i.kt)("a",{parentName:"p",href:"./sparse-primary-indexes-multiple#secondary-key-columns-can-not-be-inefficient"},"then ClickHouse is using the generic exclusion search algorithm over the key column's index marks"),"."),(0,i.kt)("p",null,"For the second case the ordering of the key columns in the compound primary key is significant for the effectiveness of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/22.3/src/Storages/MergeTree/MergeTreeDataSelectExecutor.cpp#L1444"},"generic exclusion search algorithm"),"."),(0,i.kt)("p",null,"This is a query that is filtering on the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserID")," column of the table where we ordered the key columns ",(0,i.kt)("inlineCode",{parentName:"p"},"(URL, UserID, IsRobot)")," by cardinality in descending order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hits_URL_UserID_IsRobot\nWHERE UserID = 112304\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500count()\u2500\u2510\n\u2502      73 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.026 sec.\n// highlight-next-line \nProcessed 7.92 million rows, \n31.67 MB (306.90 million rows/s., 1.23 GB/s.)\n")),(0,i.kt)("p",null,"This is the same query on the table where we ordered the key columns ",(0,i.kt)("inlineCode",{parentName:"p"},"(IsRobot, UserID, URL)")," by cardinality in ascending order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM hits_IsRobot_UserID_URL\nWHERE UserID = 112304\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500count()\u2500\u2510\n\u2502      73 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.003 sec.\n// highlight-next-line \nProcessed 20.32 thousand rows, \n81.28 KB (6.61 million rows/s., 26.44 MB/s.)\n")),(0,i.kt)("p",null,"We can see that the query execution is significantly more effective and faster on the table where we ordered the key columns by cardinality in ascending order."),(0,i.kt)("p",null,"The reason for that is that the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/22.3/src/Storages/MergeTree/MergeTreeDataSelectExecutor.cpp#L1444"},"generic exclusion search algorithm")," works most effective, when ",(0,i.kt)("a",{parentName:"p",href:"./sparse-primary-indexes-design#the-primary-index-is-used-for-selecting-granules"},"granules")," are selected via a secondary key column where the predecessor key column has a lower cardinality. We illustrated that in detail in a ",(0,i.kt)("a",{parentName:"p",href:"./sparse-primary-indexes-multiple#generic-exclusion-search-algorithm"},"previous section")," of this guide."),(0,i.kt)("h2",{id:"optimal-compression-ratio-of-data-files"},"Optimal compression ratio of data files"),(0,i.kt)("p",null,"This query compares the compression ratio of the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserID")," column between the two tables that we created above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    table AS Table,\n    name AS Column,\n    formatReadableSize(data_uncompressed_bytes) AS Uncompressed,\n    formatReadableSize(data_compressed_bytes) AS Compressed,\n    round(data_uncompressed_bytes / data_compressed_bytes, 0) AS Ratio\nFROM system.columns\nWHERE (table = 'hits_URL_UserID_IsRobot' OR table = 'hits_IsRobot_UserID_URL') AND (name = 'UserID')\nORDER BY Ratio ASC\n")),(0,i.kt)("p",null,"This is the response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500Table\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500Column\u2500\u252c\u2500Uncompressed\u2500\u252c\u2500Compressed\u2500\u252c\u2500Ratio\u2500\u2510\n\u2502 hits_URL_UserID_IsRobot \u2502 UserID \u2502 33.83 MiB    \u2502 11.24 MiB  \u2502     3 \u2502\n\u2502 hits_IsRobot_UserID_URL \u2502 UserID \u2502 33.83 MiB    \u2502 877.47 KiB \u2502    39 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n2 rows in set. Elapsed: 0.006 sec. \n")),(0,i.kt)("p",null,"We can see that the compression ratio for the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserID")," column is significantly higher for the table where we ordered the key columns ",(0,i.kt)("inlineCode",{parentName:"p"},"(IsRobot, UserID, URL)")," by cardinality in ascending order. "),(0,i.kt)("p",null,"Although in both tables exactly the same data is stored (we inserted the same 8.87 million rows into both tables), the order of the key columns in the compound primary key has a significant influence on how much disk space the ",(0,i.kt)("a",{href:"https://clickhouse.com/docs/en/introduction/distinctive-features/#data-compression",target:"_blank"},"compressed")," data in the table's ",(0,i.kt)("a",{parentName:"p",href:"./sparse-primary-indexes-design#data-is-stored-on-disk-ordered-by-primary-key-columns"},"column data files")," requires:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in the table ",(0,i.kt)("inlineCode",{parentName:"li"},"hits_URL_UserID_IsRobot")," with the compound primary key ",(0,i.kt)("inlineCode",{parentName:"li"},"(URL, UserID, IsRobot)")," where we order the key columns by cardinality in descending order, the ",(0,i.kt)("inlineCode",{parentName:"li"},"UserID.bin")," data file takes ",(0,i.kt)("strong",{parentName:"li"},"11.24 MiB")," of disk space "),(0,i.kt)("li",{parentName:"ul"},"in the table ",(0,i.kt)("inlineCode",{parentName:"li"},"hits_IsRobot_UserID_URL")," with the compound primary key ",(0,i.kt)("inlineCode",{parentName:"li"},"(IsRobot, UserID, URL)")," where we order the key columns by cardinality in ascending order, the ",(0,i.kt)("inlineCode",{parentName:"li"},"UserID.bin")," data file takes only ",(0,i.kt)("strong",{parentName:"li"},"877.47 KiB")," of disk space ")),(0,i.kt)("p",null,"Having a good compression ratio for the data of a table's column on disk not only saves space on disk, but also makes queries (especially analytical ones) that require the reading of data from that column faster, as less i/o is required for moving the column's data from disk to the main memory (the operating system's file cache)."),(0,i.kt)("p",null,"In the following we illustrate why it's beneficial for the compression ratio of a table's columns to order the primary key columns by cardinality in ascending order."),(0,i.kt)("p",null,"The diagram below sketches the on-disk order of rows for a primary key where the key columns are ordered by cardinality in ascending order:"),(0,i.kt)("img",{src:n(26717).Z,class:"image"}),(0,i.kt)("p",null,"We discussed that ",(0,i.kt)("a",{parentName:"p",href:"./sparse-primary-indexes-design#data-is-stored-on-disk-ordered-by-primary-key-columns"},"the table's row data is stored on disk ordered by primary key columns"),"."),(0,i.kt)("p",null,"In the diagram above, the table's rows (their column values on disk) are first ordered by their ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," value, and rows that have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," value are ordered by their ",(0,i.kt)("inlineCode",{parentName:"p"},"ch")," value. And because the first key column ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," has low cardinality, it is likely that there are rows with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," value. And because of that it is also likely that ",(0,i.kt)("inlineCode",{parentName:"p"},"ch")," values are ordered (locally - for rows with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," value)."),(0,i.kt)("p",null,"If in a column, similar data is placed close to each other, for example via sorting, then that data will be compressed better.\nIn general, a compression algorithm benefits from the run length of data (the more data it sees the better for compression)\nand locality (the more similar the data is, the better the compression ratio is)."),(0,i.kt)("p",null,"In contrast to the diagram above, the diagram below sketches the on-disk order of rows for a primary key where the key columns are ordered by cardinality in descending order:"),(0,i.kt)("img",{src:n(14570).Z,class:"image"}),(0,i.kt)("p",null,"Now the table's rows are first ordered by their ",(0,i.kt)("inlineCode",{parentName:"p"},"ch")," value, and rows that have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ch")," value are ordered by their ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," value.\nBut because the first key column ",(0,i.kt)("inlineCode",{parentName:"p"},"ch")," has high cardinality, it is unlikely that there are rows with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ch")," value. And because of that is is also unlikely that ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," values are ordered (locally - for rows with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ch")," value)."),(0,i.kt)("p",null,"Therefore the ",(0,i.kt)("inlineCode",{parentName:"p"},"cl")," values are most likely in random order and therefore have a bad locality and compression ration, respectively."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"For both the efficient filtering on secondary key columns in queries and the compression ratio of a table's column data files it is beneficial to order the columns in a primary key by their cardinality in ascending order."))}m.isMDXComponent=!0},26717:function(e,t,n){t.Z=n.p+"assets/images/sparse-primary-indexes-14a-a7b7f3157b9de88aefb317eb8abf526d.png"},14570:function(e,t,n){t.Z=n.p+"assets/images/sparse-primary-indexes-14b-2efaccd305d6e2e2a9bad0ed4efe6cff.png"}}]);