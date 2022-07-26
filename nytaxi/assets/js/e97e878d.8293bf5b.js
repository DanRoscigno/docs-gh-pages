"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2105],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},13341:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={sidebar_label:"SAMPLE"},o="SAMPLE Clause",p={unversionedId:"en/sql-reference/statements/select/sample",id:"en/sql-reference/statements/select/sample",title:"SAMPLE Clause",description:"The SAMPLE clause allows for approximated SELECT query processing.",source:"@site/docs/en/sql-reference/statements/select/sample.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/sample",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/select/sample",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/sample.md",tags:[],version:"current",frontMatter:{sidebar_label:"SAMPLE"},sidebar:"english",previous:{title:"PREWHERE",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/select/prewhere"},next:{title:"UNION",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/statements/select/union"}},m={},u=[{value:"SAMPLE K",id:"sample-k",level:2},{value:"SAMPLE N",id:"sample-n",level:2},{value:"SAMPLE K OFFSET M",id:"sample-k-offset-m",level:2}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sample-clause"},"SAMPLE Clause"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE")," clause allows for approximated ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," query processing."),(0,l.kt)("p",null,"When data sampling is enabled, the query is not performed on all the data, but only on a certain fraction of data (sample). For example, if you need to calculate statistics for all the visits, it is enough to execute the query on the 1/10 fraction of all the visits and then multiply the result by 10."),(0,l.kt)("p",null,"Approximated query processing can be useful in the following cases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When you have strict latency requirements (like below 100ms) but you can\u2019t justify the cost of additional hardware resources to meet them."),(0,l.kt)("li",{parentName:"ul"},"When your raw data is not accurate, so approximation does not noticeably degrade the quality."),(0,l.kt)("li",{parentName:"ul"},"Business requirements target approximate results (for cost-effectiveness, or to market exact results to premium users).")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can only use sampling with the tables in the ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family, and only if the sampling expression was specified during table creation (see ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"MergeTree engine"),")."))),(0,l.kt)("p",null,"The features of data sampling are listed below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Data sampling is a deterministic mechanism. The result of the same ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT .. SAMPLE")," query is always the same."),(0,l.kt)("li",{parentName:"ul"},"Sampling works consistently for different tables. For tables with a single sampling key, a sample with the same coefficient always selects the same subset of possible data. For example, a sample of user IDs takes rows with the same subset of all the possible user IDs from different tables. This means that you can use the sample in subqueries in the ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/operators/in"},"IN")," clause. Also, you can join samples using the ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/sql-reference/statements/select/join"},"JOIN")," clause."),(0,l.kt)("li",{parentName:"ul"},"Sampling allows reading less data from a disk. Note that you must specify the sampling key correctly. For more information, see ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"Creating a MergeTree Table"),".")),(0,l.kt)("p",null,"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE")," clause the following syntax is supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SAMPLE\xa0Clause\xa0Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE k")),(0,l.kt)("td",{parentName:"tr",align:null},"Here ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," is the number from 0 to 1. The query is executed on ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," fraction of data. For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE 0.1")," runs the query on 10% of data. ",(0,l.kt)("a",{parentName:"td",href:"#select-sample-k"},"Read more"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE n")),(0,l.kt)("td",{parentName:"tr",align:null},"Here ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," is a sufficiently large integer. The query is executed on a sample of at least ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," rows (but not significantly more than this). For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE 10000000")," runs the query on a minimum of 10,000,000 rows. ",(0,l.kt)("a",{parentName:"td",href:"#select-sample-n"},"Read more"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE k OFFSET m")),(0,l.kt)("td",{parentName:"tr",align:null},"Here ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"m")," are the numbers from 0 to 1. The query is executed on a sample of ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," fraction of the data. The data used for the sample is offset by ",(0,l.kt)("inlineCode",{parentName:"td"},"m")," fraction. ",(0,l.kt)("a",{parentName:"td",href:"#select-sample-offset"},"Read more"))))),(0,l.kt)("h2",{id:"sample-k"},"SAMPLE K"),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," is the number from 0 to 1 (both fractional and decimal notations are supported). For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 1/2")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 0.5"),"."),(0,l.kt)("p",null,"In a ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE k")," clause, the sample is taken from the ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," fraction of data. The example is shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Title,\n    count() * 10 AS PageViews\nFROM hits_distributed\nSAMPLE 0.1\nWHERE\n    CounterID = 34\nGROUP BY Title\nORDER BY PageViews DESC LIMIT 1000\n")),(0,l.kt)("p",null,"In this example, the query is executed on a sample from 0.1 (10%) of data. Values of aggregate functions are not corrected automatically, so to get an approximate result, the value ",(0,l.kt)("inlineCode",{parentName:"p"},"count()")," is manually multiplied by 10."),(0,l.kt)("h2",{id:"sample-n"},"SAMPLE N"),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is a sufficiently large integer. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 10000000"),"."),(0,l.kt)("p",null,"In this case, the query is executed on a sample of at least ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," rows (but not significantly more than this). For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 10000000")," runs the query on a minimum of 10,000,000 rows."),(0,l.kt)("p",null,"Since the minimum unit for data reading is one granule (its size is set by the ",(0,l.kt)("inlineCode",{parentName:"p"},"index_granularity")," setting), it makes sense to set a sample that is much larger than the size of the granule."),(0,l.kt)("p",null,"When using the ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE n")," clause, you do not know which relative percent of data was processed. So you do not know the coefficient the aggregate functions should be multiplied by. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"_sample_factor")," virtual column to get the approximate result."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"_sample_factor")," column contains relative coefficients that are calculated dynamically. This column is created automatically when you ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"create")," a table with the specified sampling key. The usage examples of the ",(0,l.kt)("inlineCode",{parentName:"p"},"_sample_factor")," column are shown below."),(0,l.kt)("p",null,"Let\u2019s consider the table ",(0,l.kt)("inlineCode",{parentName:"p"},"visits"),", which contains the statistics about site visits. The first example shows how to calculate the number of page views:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(PageViews * _sample_factor)\nFROM visits\nSAMPLE 10000000\n")),(0,l.kt)("p",null,"The next example shows how to calculate the total number of visits:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(_sample_factor)\nFROM visits\nSAMPLE 10000000\n")),(0,l.kt)("p",null,"The example below shows how to calculate the average session duration. Note that you do not need to use the relative coefficient to calculate the average values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(Duration)\nFROM visits\nSAMPLE 10000000\n")),(0,l.kt)("h2",{id:"sample-k-offset-m"},"SAMPLE K OFFSET M"),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," are numbers from 0 to 1. Examples are shown below."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SAMPLE 1/10\n")),(0,l.kt)("p",null,"In this example, the sample is 1/10th of all data:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[++------------]")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SAMPLE 1/10 OFFSET 1/2\n")),(0,l.kt)("p",null,"Here, a sample of 10% is taken from the second half of the data."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[------++------]")))}d.isMDXComponent=!0}}]);