"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87472],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39015:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={sidebar_label:"What is ClickHouse?",sidebar_position:1},s="What Is ClickHouse?",u={unversionedId:"en/intro",id:"en/intro",title:"What Is ClickHouse?",description:"ClickHouse\xae is a column-oriented database management system (DBMS) for online analytical processing of queries (OLAP).",source:"@site/docs/en/intro.md",sourceDirName:"en",slug:"/en/intro",permalink:"/docs-gh-pages/nytaxi/en/intro",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"What is ClickHouse?",sidebar_position:1},sidebar:"english",next:{title:"Quick Start",permalink:"/docs-gh-pages/nytaxi/en/quick-start"}},p={},d=[{value:"Key Properties of OLAP Scenario",id:"key-properties-of-olap-scenario",level:2},{value:"Why Column-Oriented Databases Work Better in the OLAP Scenario",id:"why-column-oriented-databases-work-better-in-the-olap-scenario",level:2},{value:"Input/output",id:"inputoutput",level:3},{value:"CPU",id:"cpu",level:3}],c={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"what-is-clickhouse"},"What Is ClickHouse?"),(0,l.kt)("p",null,"ClickHouse\xae is a column-oriented database management system (DBMS) for online analytical processing of queries (OLAP)."),(0,l.kt)("p",null,"In a \u201cnormal\u201d row-oriented DBMS, data is stored in this order:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Row"),(0,l.kt)("th",{parentName:"tr",align:null},"WatchID"),(0,l.kt)("th",{parentName:"tr",align:null},"JavaEnable"),(0,l.kt)("th",{parentName:"tr",align:null},"Title"),(0,l.kt)("th",{parentName:"tr",align:null},"GoodEvent"),(0,l.kt)("th",{parentName:"tr",align:null},"EventTime"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#0"),(0,l.kt)("td",{parentName:"tr",align:null},"89354350662"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Investor Relations"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 05:19:20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#1"),(0,l.kt)("td",{parentName:"tr",align:null},"90329509958"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact us"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 08:10:20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#2"),(0,l.kt)("td",{parentName:"tr",align:null},"89953706054"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Mission"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 07:38:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"#N"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")))),(0,l.kt)("p",null,"In other words, all the values related to a row are physically stored next to each other."),(0,l.kt)("p",null,"Examples of a row-oriented DBMS are MySQL, Postgres, and MS SQL Server."),(0,l.kt)("p",null,"In a column-oriented DBMS, data is stored like this:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Row:"),(0,l.kt)("th",{parentName:"tr",align:null},"#0"),(0,l.kt)("th",{parentName:"tr",align:null},"#1"),(0,l.kt)("th",{parentName:"tr",align:null},"#2"),(0,l.kt)("th",{parentName:"tr",align:null},"#N"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WatchID:"),(0,l.kt)("td",{parentName:"tr",align:null},"89354350662"),(0,l.kt)("td",{parentName:"tr",align:null},"90329509958"),(0,l.kt)("td",{parentName:"tr",align:null},"89953706054"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JavaEnable:"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title:"),(0,l.kt)("td",{parentName:"tr",align:null},"Investor Relations"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact us"),(0,l.kt)("td",{parentName:"tr",align:null},"Mission"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GoodEvent:"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EventTime:"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 05:19:20"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 08:10:20"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05-18 07:38:00"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2026")))),(0,l.kt)("p",null,"These examples only show the order that data is arranged in. The values from different columns are stored separately, and data from the same column is stored together."),(0,l.kt)("p",null,"Examples of a column-oriented DBMS: Vertica, Paraccel (Actian Matrix and Amazon Redshift), Sybase IQ, Exasol, Infobright, InfiniDB, MonetDB (VectorWise and Actian Vector), LucidDB, SAP HANA, Google Dremel, Google PowerDrill, Druid, and kdb+."),(0,l.kt)("p",null,"Different orders for storing data are better suited to different scenarios. The data access scenario refers to what queries are made, how often, and in what proportion; how much data is read for each type of query \u2013 rows, columns, and bytes; the relationship between reading and updating data; the working size of the data and how locally it is used; whether transactions are used, and how isolated they are; requirements for data replication and logical integrity; requirements for latency and throughput for each type of query, and so on."),(0,l.kt)("p",null,"The higher the load on the system, the more important it is to customize the system set up to match the requirements of the usage scenario, and the more fine grained this customization becomes. There is no system that is equally well-suited to significantly different scenarios. If a system is adaptable to a wide set of scenarios, under a high load, the system will handle all the scenarios equally poorly, or will work well for just one or few of possible scenarios."),(0,l.kt)("h2",{id:"key-properties-of-olap-scenario"},"Key Properties of OLAP Scenario"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The vast majority of requests are for read access."),(0,l.kt)("li",{parentName:"ul"},"Data is updated in fairly large batches (",">"," 1000 rows), not by single rows; or it is not updated at all."),(0,l.kt)("li",{parentName:"ul"},"Data is added to the DB but is not modified."),(0,l.kt)("li",{parentName:"ul"},"For reads, quite a large number of rows are extracted from the DB, but only a small subset of columns."),(0,l.kt)("li",{parentName:"ul"},"Tables are \u201cwide,\u201d meaning they contain a large number of columns."),(0,l.kt)("li",{parentName:"ul"},"Queries are relatively rare (usually hundreds of queries per server or less per second)."),(0,l.kt)("li",{parentName:"ul"},"For simple queries, latencies around 50 ms are allowed."),(0,l.kt)("li",{parentName:"ul"},"Column values are fairly small: numbers and short strings (for example, 60 bytes per URL)."),(0,l.kt)("li",{parentName:"ul"},"Requires high throughput when processing a single query (up to billions of rows per second per server)."),(0,l.kt)("li",{parentName:"ul"},"Transactions are not necessary."),(0,l.kt)("li",{parentName:"ul"},"Low requirements for data consistency."),(0,l.kt)("li",{parentName:"ul"},"There is one large table per query. All tables are small, except for one."),(0,l.kt)("li",{parentName:"ul"},"A query result is significantly smaller than the source data. In other words, data is filtered or aggregated, so the result fits in a single server\u2019s RAM.")),(0,l.kt)("p",null,"It is easy to see that the OLAP scenario is very different from other popular scenarios (such as OLTP or Key-Value access). So it does not make sense to try to use OLTP or a Key-Value DB for processing analytical queries if you want to get decent performance. For example, if you try to use MongoDB or Redis for analytics, you will get very poor performance compared to OLAP databases."),(0,l.kt)("h2",{id:"why-column-oriented-databases-work-better-in-the-olap-scenario"},"Why Column-Oriented Databases Work Better in the OLAP Scenario"),(0,l.kt)("p",null,"Column-oriented databases are better suited to OLAP scenarios: they are at least 100 times faster in processing most queries. The reasons are explained in detail below, but the fact is easier to demonstrate visually:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Row-oriented DBMS")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Row-oriented",src:a(31575).Z+"#",width:"630",height:"258"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Column-oriented DBMS")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Column-oriented",src:a(68066).Z+"#",width:"630",height:"258"})),(0,l.kt)("p",null,"See the difference?"),(0,l.kt)("h3",{id:"inputoutput"},"Input/output"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"For an analytical query, only a small number of table columns need to be read. In a column-oriented database, you can read just the data you need. For example, if you need 5 columns out of 100, you can expect a 20-fold reduction in I/O."),(0,l.kt)("li",{parentName:"ol"},"Since data is read in packets, it is easier to compress. Data in columns is also easier to compress. This further reduces the I/O volume."),(0,l.kt)("li",{parentName:"ol"},"Due to the reduced I/O, more data fits in the system cache.")),(0,l.kt)("p",null,"For example, the query \u201ccount the number of records for each advertising platform\u201d requires reading one \u201cadvertising platform ID\u201d column, which takes up 1 byte uncompressed. If most of the traffic was not from advertising platforms, you can expect at least 10-fold compression of this column. When using a quick compression algorithm, data decompression is possible at a speed of at least several gigabytes of uncompressed data per second. In other words, this query can be processed at a speed of approximately several billion rows per second on a single server. This speed is actually achieved in practice."),(0,l.kt)("h3",{id:"cpu"},"CPU"),(0,l.kt)("p",null,"Since executing a query requires processing a large number of rows, it helps to dispatch all operations for entire vectors instead of for separate rows, or to implement the query engine so that there is almost no dispatching cost. If you do not do this, with any half-decent disk subsystem, the query interpreter inevitably stalls the CPU. It makes sense to both store data in columns and process it, when possible, by columns."),(0,l.kt)("p",null,"There are two ways to do this:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A vector engine. All operations are written for vectors, instead of for separate values. This means you do not need to call operations very often, and dispatching costs are negligible. Operation code contains an optimized internal cycle.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Code generation. The code generated for the query has all the indirect calls in it."))),(0,l.kt)("p",null,"This is not done in \u201cnormal\u201d databases, because it does not make sense when running simple queries. However, there are exceptions. For example, MemSQL uses code generation to reduce latency when processing SQL queries. (For comparison, analytical DBMSs require optimization of throughput, not latency.)"),(0,l.kt)("p",null,"Note that for CPU efficiency, the query language must be declarative (SQL or MDX), or at least a vector (J, K). The query should only contain implicit loops, allowing for optimization."))}m.isMDXComponent=!0},68066:function(e,t,a){t.Z=a.p+"assets/images/column-oriented-b992c529fa4085b63b57452fbbeb27ba.gif"},31575:function(e,t,a){t.Z=a.p+"assets/images/row-oriented-d515facb5bffb48cbd09dc7d064c8816.gif"}}]);