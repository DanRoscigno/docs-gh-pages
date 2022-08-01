"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7082],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,N=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(N,o(o({ref:n},p),{},{components:t})):a.createElement(N,o({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32551:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],i={sidebar_position:62,sidebar_label:"Window Functions"},s="Window Functions",u={unversionedId:"en/sql-reference/window-functions/index",id:"en/sql-reference/window-functions/index",title:"Window Functions",description:"ClickHouse supports the standard grammar for defining windows and window functions. The following features are currently supported:",source:"@site/docs/en/sql-reference/window-functions/index.md",sourceDirName:"en/sql-reference/window-functions",slug:"/en/sql-reference/window-functions/",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/window-functions/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/window-functions/index.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{sidebar_position:62,sidebar_label:"Window Functions"},sidebar:"english",previous:{title:"ANSI Compatibility",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/ansi"},next:{title:"Operations",permalink:"/docs-gh-pages/nytaxi/en/operations"}},p={},m=[{value:"ClickHouse-specific Window Functions",id:"clickhouse-specific-window-functions",level:2},{value:"nonNegativeDerivative(metric_column, timestamp_column, INTERVAL X UNITS)",id:"nonnegativederivativemetric_column-timestamp_column-interval-x-units",level:3},{value:"References",id:"references",level:2},{value:"GitHub Issues",id:"github-issues",level:3},{value:"Tests",id:"tests",level:3},{value:"Postgres Docs",id:"postgres-docs",level:3},{value:"MySQL Docs",id:"mysql-docs",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Functions",id:"functions",level:3},{value:"Examples",id:"examples",level:2},{value:"Real world examples",id:"real-world-examples",level:2},{value:"Maximum/total salary per department.",id:"maximumtotal-salary-per-department",level:3},{value:"Cumulative sum.",id:"cumulative-sum",level:3},{value:"Moving / Sliding Average (per 3 rows)",id:"moving--sliding-average-per-3-rows",level:3},{value:"Moving / Sliding Average (per 10 seconds)",id:"moving--sliding-average-per-10-seconds",level:3}],d={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"window-functions"},"Window Functions"),(0,l.kt)("p",null,"ClickHouse supports the standard grammar for defining windows and window functions. The following features are currently supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Support or workaround"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ad hoc window specification (",(0,l.kt)("inlineCode",{parentName:"td"},"count(*) over (partition by id order by time desc)"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expressions involving window functions, e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"(count(*) over ()) / 2)")),(0,l.kt)("td",{parentName:"tr",align:null},"supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WINDOW")," clause (",(0,l.kt)("inlineCode",{parentName:"td"},"select ... from table window w as (partition by id)"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ROWS")," frame"),(0,l.kt)("td",{parentName:"tr",align:null},"supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RANGE")," frame"),(0,l.kt)("td",{parentName:"tr",align:null},"supported, the default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INTERVAL")," syntax for ",(0,l.kt)("inlineCode",{parentName:"td"},"DateTime")," ",(0,l.kt)("inlineCode",{parentName:"td"},"RANGE OFFSET")," frame"),(0,l.kt)("td",{parentName:"tr",align:null},"not supported, specify the number of seconds instead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GROUPS")," frame"),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calculating aggregate functions over a frame (",(0,l.kt)("inlineCode",{parentName:"td"},"sum(value) over (order by time)"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"all aggregate functions are supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rank()"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"dense_rank()"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"row_number()")),(0,l.kt)("td",{parentName:"tr",align:null},"supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lag/lead(value, offset)")),(0,l.kt)("td",{parentName:"tr",align:null},"Not supported. Workarounds:")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1) replace with ",(0,l.kt)("inlineCode",{parentName:"td"},"any(value) over (.... rows between <offset> preceding and <offset> preceding)"),", or ",(0,l.kt)("inlineCode",{parentName:"td"},"following")," for ",(0,l.kt)("inlineCode",{parentName:"td"},"lead"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2) use ",(0,l.kt)("inlineCode",{parentName:"td"},"lagInFrame/leadInFrame"),", which are analogous, but respect the window frame. To get behavior identical to ",(0,l.kt)("inlineCode",{parentName:"td"},"lag/lead"),", use ",(0,l.kt)("inlineCode",{parentName:"td"},"rows between unbounded preceding and unbounded following"))))),(0,l.kt)("h2",{id:"clickhouse-specific-window-functions"},"ClickHouse-specific Window Functions"),(0,l.kt)("h3",{id:"nonnegativederivativemetric_column-timestamp_column-interval-x-units"},"nonNegativeDerivative(metric_column, timestamp_column","[, INTERVAL X UNITS]",")"),(0,l.kt)("p",null,"Finds non-negative derivative for given ",(0,l.kt)("inlineCode",{parentName:"p"},"metric_column")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp_column"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"INTERVAL")," can be omitted, default is ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERVAL 1 SECOND"),".\nThe computed value is the following for each row:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," for 1st row,"),(0,l.kt)("li",{parentName:"ul"},"${metric",(0,l.kt)("em",{parentName:"li"},"i - metric"),"{i-1} \\over timestamp",(0,l.kt)("em",{parentName:"li"},"i - timestamp"),"{i-1}}  * interval$ for $i_th$ row.")),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("h3",{id:"github-issues"},"GitHub Issues"),(0,l.kt)("p",null,"The roadmap for the initial support of window functions is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/18097"},"in this issue"),"."),(0,l.kt)("p",null,"All GitHub issues related to window funtions have the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/labels/comp-window-functions"},"comp-window-functions")," tag."),(0,l.kt)("h3",{id:"tests"},"Tests"),(0,l.kt)("p",null,"These tests contain the examples of the currently supported grammar:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/performance/window_functions.xml"},"https://github.com/ClickHouse/ClickHouse/blob/master/tests/performance/window_functions.xml")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/01591_window_functions.sql"},"https://github.com/ClickHouse/ClickHouse/blob/master/tests/queries/0_stateless/01591_window_functions.sql")),(0,l.kt)("h3",{id:"postgres-docs"},"Postgres Docs"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/sql-select.html#SQL-WINDOW"},"https://www.postgresql.org/docs/current/sql-select.html#SQL-WINDOW")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/devel/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS"},"https://www.postgresql.org/docs/devel/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/devel/functions-window.html"},"https://www.postgresql.org/docs/devel/functions-window.html")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/devel/tutorial-window.html"},"https://www.postgresql.org/docs/devel/tutorial-window.html")),(0,l.kt)("h3",{id:"mysql-docs"},"MySQL Docs"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html"},"https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/window-functions-usage.html"},"https://dev.mysql.com/doc/refman/8.0/en/window-functions-usage.html")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/window-functions-frames.html"},"https://dev.mysql.com/doc/refman/8.0/en/window-functions-frames.html")),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"aggregate_function (column_name)\n  OVER ([[PARTITION BY grouping_column] [ORDER BY sorting_column] \n        [ROWS or RANGE expression_to_bound_rows_withing_the_group]] | [window_name])\nFROM table_name\nWINDOW window_name as ([[PARTITION BY grouping_column] [ORDER BY sorting_column])\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PARTITION BY")," - defines how to break a resultset into groups."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ORDER BY")," - defines how to order rows inside the group during calculation aggregate_function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ROWS or RANGE")," - defines bounds of a frame, aggregate_function is calculated within a frame."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WINDOW")," - allows to reuse a window definition with multiple exressions.")),(0,l.kt)("h3",{id:"functions"},"Functions"),(0,l.kt)("p",null,"These functions can be used only as a window function."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"row_number()")," -\tNumber the current row within its partition starting from 1.\n",(0,l.kt)("inlineCode",{parentName:"p"},"first_value(x)")," -\tReturn the first non-NULL value evaluated within its ordered frame.\n",(0,l.kt)("inlineCode",{parentName:"p"},"last_value(x)")," -\tReturn the last non-NULL value evaluated within its ordered frame.\n",(0,l.kt)("inlineCode",{parentName:"p"},"nth_value(x, offset)")," - Return the first non-NULL value evaluated against the nth row (offset) in its ordered frame.\n",(0,l.kt)("inlineCode",{parentName:"p"},"rank()")," -\tRank the current row within its partition with gaps.\n",(0,l.kt)("inlineCode",{parentName:"p"},"dense_rank()"),"\t- Rank the current row within its partition without gaps.\n",(0,l.kt)("inlineCode",{parentName:"p"},"lagInFrame(x)")," - Return a value evaluated at the row that is at a specified physical offset row before the current row within the ordered frame.\n",(0,l.kt)("inlineCode",{parentName:"p"},"leadInFrame(x)")," - Return a value evaluated at the row that is offset rows after the current row within the ordered frame."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"      PARTITION\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  <-- UNBOUNDED PRECEDING (BEGINNING of the PARTITION)\n\u2502                 \u2502\n\u2502                 \u2502\n\u2502=================\u2502  <-- N PRECEDING  <\u2500\u2510\n\u2502      N ROWS     \u2502                     \u2502  F\n\u2502  Before CURRENT \u2502                     \u2502  R\n\u2502~~~~~~~~~~~~~~~~~\u2502  <-- CURRENT ROW    \u2502  A\n\u2502     M ROWS      \u2502                     \u2502  M\n\u2502   After CURRENT \u2502                     \u2502  E\n\u2502=================\u2502  <-- M FOLLOWING  <\u2500\u2518\n\u2502                 \u2502\n\u2502                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  <--- UNBOUNDED FOLLOWING (END of the PARTITION)\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE wf_partition\n(\n    `part_key` UInt64,\n    `value` UInt64,\n    `order` UInt64    \n)\nENGINE = Memory;\n\nINSERT INTO wf_partition FORMAT Values\n   (1,1,1), (1,2,2), (1,3,3), (2,0,0), (3,0,0);\n\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key) AS frame_values\nFROM wf_partition\nORDER BY\n    part_key ASC,\n    value ASC;\n\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [1,2,3]      \u2502   <\u2510   \n\u2502        1 \u2502     2 \u2502     2 \u2502 [1,2,3]      \u2502    \u2502  1-st group\n\u2502        1 \u2502     3 \u2502     3 \u2502 [1,2,3]      \u2502   <\u2518 \n\u2502        2 \u2502     0 \u2502     0 \u2502 [0]          \u2502   <-  2-nd group\n\u2502        3 \u2502     0 \u2502     0 \u2502 [0]          \u2502   <-  3-d group\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE wf_frame\n(\n    `part_key` UInt64,\n    `value` UInt64,\n    `order` UInt64\n)\nENGINE = Memory;\n\nINSERT INTO wf_frame FORMAT Values\n   (1,1,1), (1,2,2), (1,3,3), (1,4,4), (1,5,5);\n\n-- frame is bounded by bounds of a partition (BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key ORDER BY order ASC\n         Rows BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS frame_values\nFROM wf_frame\nORDER BY\n    part_key ASC,\n    value ASC;\n    \n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [1,2,3,4,5]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- short form - no bound expression, no order by\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key) AS frame_values\nFROM wf_frame\nORDER BY\n    part_key ASC,\n    value ASC;\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [1,2,3,4,5]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- frame is bounded by the beggining of a partition and the current row\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key ORDER BY order ASC\n          Rows BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS frame_values\nFROM wf_frame\nORDER BY\n    part_key ASC,\n    value ASC;\n\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [1]          \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [1,2]        \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [1,2,3]      \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [1,2,3,4]    \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [1,2,3,4,5]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- short form (frame is bounded by the beggining of a partition and the current row)\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key ORDER BY order ASC) AS frame_values\nFROM wf_frame\nORDER BY\n    part_key ASC,\n    value ASC;\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [1]          \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [1,2]        \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [1,2,3]      \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [1,2,3,4]    \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [1,2,3,4,5]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- frame is bounded by the beggining of a partition and the current row, but order is backward\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key ORDER BY order DESC) AS frame_values\nFROM wf_frame\nORDER BY\n    part_key ASC,\n    value ASC;\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [5,4,3,2,1]  \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [5,4,3,2]    \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [5,4,3]      \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [5,4]        \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [5]          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- sliding frame - 1 PRECEDING ROW AND CURRENT ROW\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key ORDER BY order ASC\n          Rows BETWEEN 1 PRECEDING AND CURRENT ROW) AS frame_values\nFROM wf_frame\nORDER BY\n    part_key ASC,\n    value ASC;\n\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [1]          \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [1,2]        \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [2,3]        \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [3,4]        \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [4,5]        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- sliding frame - Rows BETWEEN 1 PRECEDING AND UNBOUNDED FOLLOWING \nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER (PARTITION BY part_key ORDER BY order ASC\n          Rows BETWEEN 1 PRECEDING AND UNBOUNDED FOLLOWING) AS frame_values\nFROM wf_frame\nORDER BY\n    part_key ASC,\n    value ASC;\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [1,2,3,4,5]  \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [2,3,4,5]    \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [3,4,5]      \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [4,5]        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- row_number does not respect the frame, so rn_1 = rn_2 = rn_3 != rn_4\nSELECT\n    part_key,\n    value,\n    order,\n    groupArray(value) OVER w1 AS frame_values,\n    row_number() OVER w1 AS rn_1,\n    sum(1) OVER w1 AS rn_2,\n    row_number() OVER w2 AS rn_3,\n    sum(1) OVER w2 AS rn_4\nFROM wf_frame\nWINDOW\n    w1 AS (PARTITION BY part_key ORDER BY order DESC),\n    w2 AS (PARTITION BY part_key ORDER BY order DESC \n                   Rows BETWEEN 1 PRECEDING AND CURRENT ROW)\nORDER BY\n    part_key ASC,\n    value ASC;\n\u250c\u2500part_key\u2500\u252c\u2500value\u2500\u252c\u2500order\u2500\u252c\u2500frame_values\u2500\u252c\u2500rn_1\u2500\u252c\u2500rn_2\u2500\u252c\u2500rn_3\u2500\u252c\u2500rn_4\u2500\u2510\n\u2502        1 \u2502     1 \u2502     1 \u2502 [5,4,3,2,1]  \u2502    5 \u2502    5 \u2502    5 \u2502    2 \u2502\n\u2502        1 \u2502     2 \u2502     2 \u2502 [5,4,3,2]    \u2502    4 \u2502    4 \u2502    4 \u2502    2 \u2502\n\u2502        1 \u2502     3 \u2502     3 \u2502 [5,4,3]      \u2502    3 \u2502    3 \u2502    3 \u2502    2 \u2502\n\u2502        1 \u2502     4 \u2502     4 \u2502 [5,4]        \u2502    2 \u2502    2 \u2502    2 \u2502    2 \u2502\n\u2502        1 \u2502     5 \u2502     5 \u2502 [5]          \u2502    1 \u2502    1 \u2502    1 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- first_value and last_value respect the frame\nSELECT\n    groupArray(value) OVER w1 AS frame_values_1,\n    first_value(value) OVER w1 AS first_value_1,\n    last_value(value) OVER w1 AS last_value_1,\n    groupArray(value) OVER w2 AS frame_values_2,\n    first_value(value) OVER w2 AS first_value_2,\n    last_value(value) OVER w2 AS last_value_2\nFROM wf_frame\nWINDOW\n    w1 AS (PARTITION BY part_key ORDER BY order ASC),\n    w2 AS (PARTITION BY part_key ORDER BY order ASC Rows BETWEEN 1 PRECEDING AND CURRENT ROW)\nORDER BY\n    part_key ASC,\n    value ASC;\n\u250c\u2500frame_values_1\u2500\u252c\u2500first_value_1\u2500\u252c\u2500last_value_1\u2500\u252c\u2500frame_values_2\u2500\u252c\u2500first_value_2\u2500\u252c\u2500last_value_2\u2500\u2510\n\u2502 [1]            \u2502             1 \u2502            1 \u2502 [1]            \u2502             1 \u2502            1 \u2502\n\u2502 [1,2]          \u2502             1 \u2502            2 \u2502 [1,2]          \u2502             1 \u2502            2 \u2502\n\u2502 [1,2,3]        \u2502             1 \u2502            3 \u2502 [2,3]          \u2502             2 \u2502            3 \u2502\n\u2502 [1,2,3,4]      \u2502             1 \u2502            4 \u2502 [3,4]          \u2502             3 \u2502            4 \u2502\n\u2502 [1,2,3,4,5]    \u2502             1 \u2502            5 \u2502 [4,5]          \u2502             4 \u2502            5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- second value within the frame\nSELECT\n    groupArray(value) OVER w1 AS frame_values_1,\n    nth_value(value, 2) OVER w1 AS second_value\nFROM wf_frame\nWINDOW w1 AS (PARTITION BY part_key ORDER BY order ASC Rows BETWEEN 3 PRECEDING AND CURRENT ROW)\nORDER BY\n    part_key ASC,\n    value ASC\n\u250c\u2500frame_values_1\u2500\u252c\u2500second_value\u2500\u2510\n\u2502 [1]            \u2502            0 \u2502\n\u2502 [1,2]          \u2502            2 \u2502\n\u2502 [1,2,3]        \u2502            2 \u2502\n\u2502 [1,2,3,4]      \u2502            2 \u2502\n\u2502 [2,3,4,5]      \u2502            3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- second value within the frame + Null for missing values\nSELECT\n    groupArray(value) OVER w1 AS frame_values_1,\n    nth_value(toNullable(value), 2) OVER w1 AS second_value\nFROM wf_frame\nWINDOW w1 AS (PARTITION BY part_key ORDER BY order ASC Rows BETWEEN 3 PRECEDING AND CURRENT ROW)\nORDER BY\n    part_key ASC,\n    value ASC\n\u250c\u2500frame_values_1\u2500\u252c\u2500second_value\u2500\u2510\n\u2502 [1]            \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 [1,2]          \u2502            2 \u2502\n\u2502 [1,2,3]        \u2502            2 \u2502\n\u2502 [1,2,3,4]      \u2502            2 \u2502\n\u2502 [2,3,4,5]      \u2502            3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"real-world-examples"},"Real world examples"),(0,l.kt)("h3",{id:"maximumtotal-salary-per-department"},"Maximum/total salary per department."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employees\n(\n    `department` String,\n    `employee_name` String,\n    `salary` Float\n)\nENGINE = Memory;\n\nINSERT INTO employees FORMAT Values\n   ('Finance', 'Jonh', 200),\n   ('Finance', 'Joan', 210),\n   ('Finance', 'Jean', 505),\n   ('IT', 'Tim', 200),\n   ('IT', 'Anna', 300),\n   ('IT', 'Elen', 500);\n\nSELECT\n    department,\n    employee_name AS emp,\n    salary,\n    max_salary_per_dep,\n    total_salary_per_dep,\n    round((salary / total_salary_per_dep) * 100, 2) AS `share_per_dep(%)`\nFROM\n(\n    SELECT\n        department,\n        employee_name,\n        salary,\n        max(salary) OVER wndw AS max_salary_per_dep,\n        sum(salary) OVER wndw AS total_salary_per_dep\n    FROM employees\n    WINDOW wndw AS (PARTITION BY department\n          rows BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)\n    ORDER BY\n        department ASC,\n        employee_name ASC\n);\n\n\u250c\u2500department\u2500\u252c\u2500emp\u2500\u2500\u252c\u2500salary\u2500\u252c\u2500max_salary_per_dep\u2500\u252c\u2500total_salary_per_dep\u2500\u252c\u2500share_per_dep(%)\u2500\u2510\n\u2502 Finance    \u2502 Jean \u2502    505 \u2502                505 \u2502                  915 \u2502            55.19 \u2502\n\u2502 Finance    \u2502 Joan \u2502    210 \u2502                505 \u2502                  915 \u2502            22.95 \u2502\n\u2502 Finance    \u2502 Jonh \u2502    200 \u2502                505 \u2502                  915 \u2502            21.86 \u2502\n\u2502 IT         \u2502 Anna \u2502    300 \u2502                500 \u2502                 1000 \u2502               30 \u2502\n\u2502 IT         \u2502 Elen \u2502    500 \u2502                500 \u2502                 1000 \u2502               50 \u2502\n\u2502 IT         \u2502 Tim  \u2502    200 \u2502                500 \u2502                 1000 \u2502               20 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"cumulative-sum"},"Cumulative sum."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE events\n(\n    `metric` String,\n    `ts` DateTime,\n    `value` Float\n)\nENGINE = Memory\n\nINSERT INTO warehouse VALUES\n    ('sku38', '2020-01-01', 9),\n    ('sku38', '2020-02-01', 1),\n    ('sku38', '2020-03-01', -4),\n    ('sku1', '2020-01-01', 1),\n    ('sku1', '2020-02-01', 1),\n    ('sku1', '2020-03-01', 1);\n\nSELECT\n    item,\n    ts,\n    value,\n    sum(value) OVER (PARTITION BY item ORDER BY ts ASC) AS stock_balance\nFROM warehouse\nORDER BY\n    item ASC,\n    ts ASC;\n\n\u250c\u2500item\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ts\u2500\u252c\u2500value\u2500\u252c\u2500stock_balance\u2500\u2510\n\u2502 sku1  \u2502 2020-01-01 00:00:00 \u2502     1 \u2502             1 \u2502\n\u2502 sku1  \u2502 2020-02-01 00:00:00 \u2502     1 \u2502             2 \u2502\n\u2502 sku1  \u2502 2020-03-01 00:00:00 \u2502     1 \u2502             3 \u2502\n\u2502 sku38 \u2502 2020-01-01 00:00:00 \u2502     9 \u2502             9 \u2502\n\u2502 sku38 \u2502 2020-02-01 00:00:00 \u2502     1 \u2502            10 \u2502\n\u2502 sku38 \u2502 2020-03-01 00:00:00 \u2502    -4 \u2502             6 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"moving--sliding-average-per-3-rows"},"Moving / Sliding Average (per 3 rows)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sensors\n(\n    `metric` String,\n    `ts` DateTime,\n    `value` Float\n)\nENGINE = Memory;\n\ninsert into sensors values('cpu_temp', '2020-01-01 00:00:00', 87),\n                          ('cpu_temp', '2020-01-01 00:00:01', 77),\n                          ('cpu_temp', '2020-01-01 00:00:02', 93),\n                          ('cpu_temp', '2020-01-01 00:00:03', 87),\n                          ('cpu_temp', '2020-01-01 00:00:04', 87),\n                          ('cpu_temp', '2020-01-01 00:00:05', 87),\n                          ('cpu_temp', '2020-01-01 00:00:06', 87),\n                          ('cpu_temp', '2020-01-01 00:00:07', 87);\nSELECT\n    metric,\n    ts,\n    value,\n    avg(value) OVER\n       (PARTITION BY metric ORDER BY ts ASC Rows BETWEEN 2 PRECEDING AND CURRENT ROW)\n         AS moving_avg_temp\nFROM sensors\nORDER BY\n    metric ASC,\n    ts ASC;\n\n\u250c\u2500metric\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ts\u2500\u252c\u2500value\u2500\u252c\u2500\u2500\u2500moving_avg_temp\u2500\u2510\n\u2502 cpu_temp \u2502 2020-01-01 00:00:00 \u2502    87 \u2502                87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:00:01 \u2502    77 \u2502                82 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:00:02 \u2502    93 \u2502 85.66666666666667 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:00:03 \u2502    87 \u2502 85.66666666666667 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:00:04 \u2502    87 \u2502                89 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:00:05 \u2502    87 \u2502                87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:00:06 \u2502    87 \u2502                87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:00:07 \u2502    87 \u2502                87 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"moving--sliding-average-per-10-seconds"},"Moving / Sliding Average (per 10 seconds)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    metric,\n    ts,\n    value,\n    avg(value) OVER (PARTITION BY metric ORDER BY ts\n      Range BETWEEN 10 PRECEDING AND CURRENT ROW) AS moving_avg_10_seconds_temp\nFROM sensors\nORDER BY\n    metric ASC,\n    ts ASC;\n    \n\u250c\u2500metric\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ts\u2500\u252c\u2500value\u2500\u252c\u2500moving_avg_10_seconds_temp\u2500\u2510\n\u2502 cpu_temp \u2502 2020-01-01 00:00:00 \u2502    87 \u2502                         87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:01:10 \u2502    77 \u2502                         77 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:02:20 \u2502    93 \u2502                         93 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:03:30 \u2502    87 \u2502                         87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:04:40 \u2502    87 \u2502                         87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:05:50 \u2502    87 \u2502                         87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:06:00 \u2502    87 \u2502                         87 \u2502\n\u2502 cpu_temp \u2502 2020-01-01 00:07:10 \u2502    87 \u2502                         87 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);