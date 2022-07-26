"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79877],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={},c="metrics",l={unversionedId:"en/operations/system-tables/metrics",id:"en/operations/system-tables/metrics",title:"metrics",description:"Contains metrics which can be calculated instantly, or have a current value. For example, the number of simultaneously processed queries or the current replica delay. This table is always up to date.",source:"@site/docs/en/operations/system-tables/metrics.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/metrics",permalink:"/docs-gh-pages/up/en/operations/system-tables/metrics",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"metric_log",permalink:"/docs-gh-pages/up/en/operations/system-tables/metric_log"},next:{title:"mutations",permalink:"/docs-gh-pages/up/en/operations/system-tables/mutations"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"metrics"},"metrics"),(0,s.kt)("p",null,"Contains metrics which can be calculated instantly, or have a current value. For example, the number of simultaneously processed queries or the current replica delay. This table is always up to date."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"metric")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 Metric name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 Metric value."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"description")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/sql-reference/data-types/string"},"String"),") \u2014 Metric description.")),(0,s.kt)("p",null,"The list of supported metrics you can find in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Common/CurrentMetrics.cpp"},"src/Common/CurrentMetrics.cpp")," source file of ClickHouse."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.metrics LIMIT 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500metric\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u252c\u2500description\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Query                                \u2502     1 \u2502 Number of executing queries                                            \u2502\n\u2502 Merge                                \u2502     0 \u2502 Number of executing background merges                                  \u2502\n\u2502 PartMutation                         \u2502     0 \u2502 Number of mutations (ALTER DELETE/UPDATE)                              \u2502\n\u2502 ReplicatedFetch                      \u2502     0 \u2502 Number of data parts being fetched from replicas                       \u2502\n\u2502 ReplicatedSend                       \u2502     0 \u2502 Number of data parts being sent to replicas                            \u2502\n\u2502 ReplicatedChecks                     \u2502     0 \u2502 Number of data parts checking for consistency                          \u2502\n\u2502 BackgroundMergesAndMutationsPoolTask \u2502     0 \u2502 Number of active merges and mutations in an associated background pool \u2502\n\u2502 BackgroundFetchesPoolTask            \u2502     0 \u2502 Number of active fetches in an associated background pool              \u2502\n\u2502 BackgroundCommonPoolTask             \u2502     0 \u2502 Number of active tasks in an associated background pool                \u2502\n\u2502 BackgroundMovePoolTask               \u2502     0 \u2502 Number of active tasks in BackgroundProcessingPool for moves           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/system-tables/asynchronous_metrics#system_tables-asynchronous_metrics"},"system.asynchronous_metrics")," \u2014 Contains periodically calculated metrics."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/system-tables/events#system_tables-events"},"system.events")," \u2014 Contains a number of events that occurred."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/system-tables/metric_log#system_tables-metric_log"},"system.metric_log")," \u2014 Contains a history of metrics values from tables ",(0,s.kt)("inlineCode",{parentName:"li"},"system.metrics")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"system.events"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/en/operations/monitoring"},"Monitoring")," \u2014 Base concepts of ClickHouse monitoring.")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/metrics"},"Original article")," "))}f.isMDXComponent=!0}}]);